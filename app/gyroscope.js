import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Gyroscope } from 'expo-sensors';

export function calculateRotation(x, y, z) {
  return Math.sqrt(x * x + y * y + z * z);
}

export function classifyRotation(value) {
  if (value < 0.5) return 'Stable';
  if (value < 1.5) return 'Wobbly';
  return 'Unstable';
}

export function getRotationFeedback(level) {
  if (level === 'Stable') {
    return 'Good stability. The structure is not rotating much.';
  }

  else if (level === 'Wobbly') {
    return 'Some wobble detected. The structure may need improvement.';
  }

  else if (level === 'Unstable') {
    return 'High rotation detected. The structure is unstable.';
  }

  return 'Press Start to begin measuring rotation.';
}

export function classifyAverageRotation(readings) {
  if (!readings || readings.length === 0) {
    return 'Not Started';
  }

  const average =
    readings.reduce((total, value) => total + value, 0) / readings.length;

  return classifyRotation(average);
}

export function GyroscopeMeter({ onGyroscopeChange }) {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [measuring, setMeasuring] = useState(false);
  const [readings, setReadings] = useState([]);

  function startMeasuring() {
    if (subscription) return;

    setReadings([]);

    Gyroscope.setUpdateInterval(50);

    const sub = Gyroscope.addListener((gyroscopeData) => {
      setData(gyroscopeData);

      const value = calculateRotation(
        gyroscopeData.x,
        gyroscopeData.y,
        gyroscopeData.z
      );

      setReadings((previous) => [...previous, value]);
    });

    setSubscription(sub);
    setMeasuring(true);
  }

function stopMeasuring() {
  let measuredVibration = '0.00';
  let finalLevel = 'Not Started';

  if (readings.length > 0) {
    const average =
      readings.reduce((total, value) => total + value, 0) / readings.length;

    measuredVibration = average.toFixed(2);
    finalLevel = classifyRotation(average);
  }

  if (subscription) {
    subscription.remove();
    setSubscription(null);
  }

  setMeasuring(false);

  if (onGyroscopeChange) {
    onGyroscopeChange({
      measuredVibration,
      finalLevel,
      isFinal: true,
    });
  }
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

  const rotationValue = calculateRotation(data.x, data.y, data.z);
  const rotationLevel = measuring
    ? classifyRotation(rotationValue)
    : 'Not Measuring';

  const feedback = measuring
    ? getRotationFeedback(rotationLevel)
    : 'Press Start to begin measuring rotation.';

  useEffect(() => {
    if (onGyroscopeChange) {
      onGyroscopeChange({
        x: data.x,
        y: data.y,
        z: data.z,
        rotationValue,
        rotationLevel,
        feedback,
        isMeasuring: measuring,
      });
    }
  }, [data, rotationValue, rotationLevel, feedback, measuring]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gyroscope Stability Meter</Text>

      <Text style={styles.level}>{rotationLevel}</Text>

      <Text style={styles.value}>
        Measured vibration: {rotationValue.toFixed(2)}
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
    padding: 14,
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
    fontSize: 25,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 5,
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