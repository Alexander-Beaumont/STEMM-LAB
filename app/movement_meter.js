import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export function calculateMovement(x, y, z) {
  return Math.sqrt(x * x + y * y + z * z);
}

export function classifyMovement(value) {
  if (value < 1.02) return 'Smooth';
  if (value < 1.15) return 'Moderate';
  return 'Shaky';
}

export function getMovementFeedback(level) {
  if (level === 'Smooth') {
    return 'Good control. Your movement is slow and stable.';
  }

  if (level === 'Moderate') {
    return 'Moderate movement detected. Try to move more smoothly.';
  }

  if (level === 'Shaky') {
    return 'High vibration detected. Slow down and control the movement.';
  }

  return 'Press Start to begin measuring your movement.';
}

export function MovementMeter({ onMovementChange }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [measuring, setMeasuring] = useState(false);

  function startMeasuring() {
    if (subscription) return;

    Accelerometer.setUpdateInterval(100);

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

  const movementValue = calculateMovement(data.x, data.y, data.z);
  const movementLevel = measuring ? classifyMovement(movementValue) : 'Not Measuring';
  const feedback = measuring
    ? getMovementFeedback(movementLevel)
    : 'Press Start to begin measuring your movement.';

  React.useEffect(() => {
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
        Intensity: {movementValue.toFixed(2)}
      </Text>

      <Text style={styles.feedback}>{feedback}</Text>

      <TouchableOpacity style={styles.button} onPress={startMeasuring}>
        <Text style={styles.buttonText}>Start Measuring</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stopButton} onPress={stopMeasuring}>
        <Text style={styles.buttonText}>Stop Measuring</Text>
      </TouchableOpacity>
    </View>
  );
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
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});