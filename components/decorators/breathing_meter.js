import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';

export function calculateBreathingMovement(x, y, z) {
  const total = Math.sqrt(x * x + y * y + z * z);
  return Math.abs(total - 1);
}

export function classifyBreathing(value) {
  if (value < 0.03) return 'Slow';
  if (value < 0.08) return 'Normal';
  return 'Fast';
}

export default function BreathingMeter({ onResult }) {
  const [subscription, setSubscription] = useState(null);
  const [measuring, setMeasuring] = useState(false);
  const [movement, setMovement] = useState(0);
  const [readings, setReadings] = useState([]);

  function startMeasuring() {
    if (subscription) return;

    setReadings([]);
    setMovement(0);
    setMeasuring(true);

    Accelerometer.setUpdateInterval(200);

    const sub = Accelerometer.addListener((data) => {
      const value = calculateBreathingMovement(data.x, data.y, data.z);
      setMovement(value);
      setReadings((previous) => [...previous, value]);
    });

    setSubscription(sub);
  }

  function stopMeasuring() {
    if (subscription) {
      subscription.remove();
      setSubscription(null);
    }

    setMeasuring(false);

    if (readings.length === 0) return;

    const average =
      readings.reduce((total, value) => total + value, 0) / readings.length;

    const roundedAverage = average.toFixed(3);
    const level = classifyBreathing(average);

    if (onResult) {
      onResult({
        movement: roundedAverage,
        level,
        summary: `${level} breathing - movement ${roundedAverage}`,
      });
    }
  }

  useEffect(() => {
    return () => {
      if (subscription) {
        subscription.remove();
      }
    };
  }, [subscription]);

  const currentLevel = measuring ? classifyBreathing(movement) : 'Not Measuring';

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Breathing Meter</Text>

      <Text style={styles.level}>{currentLevel}</Text>

      <Text style={styles.value}>
        Movement: {movement.toFixed(3)}
      </Text>

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

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
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
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 14,
  },
  value: {
    textAlign: 'center',
    marginBottom: 10,
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