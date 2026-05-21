import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';
import * as Haptics from 'expo-haptics';


// async function vibratePhone() {
//   await Haptics.notificationAsync(
//     Haptics.NotificationFeedbackType.Success
//   );
// }

export function calculateMovement(x, y, z) {
  const totalAcceleration = Math.sqrt(x * x + y * y + z * z);

  // Removes the normal gravity baseline, making movement/shaking easier to detect.
  return Math.abs(totalAcceleration - 1);
}

export function classifyMovement(value) {
  if (value < 0.08) return 'Steady';
  if (value < 0.25) return 'Moderate';
    // vibratePhone();
  return 'Shaky';
}

export function getMovementFeedback(level) {
  if (level === 'Steadily') {
    return 'Good control. Your movement is slow and stable.';
  }

  if (level === 'Moderate') {
    return 'Moderate movement detected. Try to move more steadily.';
  }

  if (level === 'Shaky') {
    return 'High vibration detected. Slow down and control the movement.';
  }

  return 'Press Start to begin measuring your movement.';
}
export function MovementMeter({ onMovementChange, hapticsEnabled = false }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [measuring, setMeasuring] = useState(false);

  function startMeasuring() {
    if (subscription) return;

    Accelerometer.setUpdateInterval(50);

    const sub = Accelerometer.addListener((accelerometerData) => {
      setData(accelerometerData);
    });

    setSubscription(sub);
    setMeasuring(true);
  }

  function stopMeasuring() {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }

    setMeasuring(false);
  }

useEffect(() => {
  return () => {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
      setMeasuring(false);
    }
  };
}, [subscription]);

  const movementValue = calculateMovement(data.x, data.y, data.z);
  const movementLevel = measuring ? classifyMovement(movementValue) : 'Not Measuring';

    useEffect(() => {
    if (measuring && hapticsEnabled && movementLevel === 'Shaky') {
        Haptics.notificationAsync(
        Haptics.NotificationFeedbackType.Error
        );
    }
    }, [movementLevel, measuring, hapticsEnabled]);
  
  const feedback = measuring
    ? getMovementFeedback(movementLevel)
    : 'Press Start to begin measuring your movement.';

  useEffect(() => {
    if (onMovementChange) {
      onMovementChange({
        x: data.x,
        y: data.y,
        z: data.z,
        movementValue,
        movementLevel,
        feedback,
        isMeasuring: measuring,
      });
    }
  }, [data, movementValue, movementLevel, feedback, measuring]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Movement Meter</Text>

      <Text style={styles.level}>{movementLevel}</Text>

      <Text style={styles.value}>
        Movement Intensity: {movementValue.toFixed(2)}
      </Text>

      <Text style={styles.feedback}>{feedback}</Text>

      <TouchableOpacity
        style={[styles.button, measuring && styles.disabledButton]}
        onPress={startMeasuring}
        disabled={measuring}
      >
        <Text style={styles.buttonText}>Start Measuring</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.stopButton, !measuring && styles.disabledButton]}
        onPress={stopMeasuring}
        disabled={!measuring}
      >
        <Text style={styles.buttonText}>Stop Measuring</Text>
      </TouchableOpacity>
    </View>
  );
}
export default function HiddenRoute() {
  return null;
}
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  level: {
    fontSize: 34,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 14,
  },
  value: {
    textAlign: 'center',
    marginBottom: 10,
  },
  feedback: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 8,
  },
  stopButton: {
    backgroundColor: '#555',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 8,
  },
  disabledButton: {
    backgroundColor: '#999',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});