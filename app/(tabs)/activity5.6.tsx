import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { Accelerometer } from 'expo-sensors';

export default function Activity56() {
  const [data, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState<any>(null);
  const [measuring, setMeasuring] = useState(false);

  function calculateMovement() {
    const { x, y, z } = data;
    return Math.sqrt(x * x + y * y + z * z);
  }

  function classifyMovement(value: number) {
    if (!measuring) return 'Not Measuring';
    if (value < 1.1) return 'Smooth';
    if (value < 1.5) return 'Moderate';
    return 'Shaky';
  }

  function getFeedback(level: string) {
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

  const movementValue = calculateMovement();
  const movementLevel = classifyMovement(movementValue);
  const feedback = getFeedback(movementLevel);

  return (
    <View style={styles.container}>
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={() => router.push('/leaderboard' as any)}>
          <Text style={styles.icon}>▮▮▮</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/' as any)}>
          <Text style={styles.icon}>⌂</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/settings' as any)}>
          <Text style={styles.icon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.appTitle}>STEMM LAB APP</Text>

      <Text style={styles.title}>Human Performance Lab</Text>

      <Text style={styles.description}>
        Use your phone’s movement sensor to measure how smooth and controlled your stretching movement is.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Movement Status</Text>
        <Text style={styles.status}>{movementLevel}</Text>
      </View>

      <View style={styles.dataRow}>
        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Smoothness</Text>
          <Text style={styles.dataValue}>{movementLevel}</Text>
        </View>

        <View style={styles.dataBox}>
          <Text style={styles.dataLabel}>Intensity</Text>
          <Text style={styles.dataValue}>{movementValue.toFixed(2)}</Text>
        </View>
      </View>

      <View style={styles.feedbackBox}>
        <Text style={styles.feedbackTitle}>Feedback</Text>
        <Text style={styles.feedbackText}>{feedback}</Text>
      </View>

      <TouchableOpacity style={styles.startButton} onPress={startMeasuring}>
        <Text style={styles.buttonText}>Start Measuring</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.stopButton} onPress={stopMeasuring}>
        <Text style={styles.buttonText}>Stop Measuring</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
    backgroundColor: '#fff',
  },
  topIcons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 14,
    marginBottom: 35,
  },
  icon: {
    fontSize: 22,
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 24,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 18,
    marginBottom: 18,
    backgroundColor: '#f3f3f3',
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 10,
  },
  status: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  },
  dataRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 18,
  },
  dataBox: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    backgroundColor: '#f9f9f9',
  },
  dataLabel: {
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 8,
  },
  dataValue: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
  },
  feedbackBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 14,
    marginBottom: 18,
  },
  feedbackTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 6,
  },
  feedbackText: {
    fontSize: 14,
    lineHeight: 20,
  },
  startButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 10,
  },
  stopButton: {
    backgroundColor: '#555',
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
  },
});