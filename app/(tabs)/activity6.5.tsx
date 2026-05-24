import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import '../global.js';
import ReactionTimer from '../reaction_timer';

export default function Activity65() {
  const [darkMode] = useState(global.darkmodeEnabled);

  const currentMemberData =
    (global as any).activity6Data[(global as any).activity6DataIndex];

  const [attempt1, setAttempt1] = useState(currentMemberData.attempt1);
  const [attempt2, setAttempt2] = useState(currentMemberData.attempt2);
  const [attempt3, setAttempt3] = useState(currentMemberData.attempt3);

  function saveResult(result: number) {
    if (attempt1 === null) {
      (global as any).activity6Data[(global as any).activity6DataIndex].attempt1 = result;
      setAttempt1(result);
      return;
    }

    if (attempt2 === null) {
      (global as any).activity6Data[(global as any).activity6DataIndex].attempt2 = result;
      setAttempt2(result);
      return;
    }

    (global as any).activity6Data[(global as any).activity6DataIndex].attempt3 = result;
    setAttempt3(result);
  }

  function getAverage() {
    const results = [attempt1, attempt2, attempt3].filter(
      (value) => value !== null
    );

    if (results.length === 0) return 'Not Started';

    const total = results.reduce((sum, value) => sum + value, 0);
    return `${Math.round(total / results.length)} ms`;
  }

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? '#111' : '#fff' },
      ]}
    >
      <Text style={[styles.appTitle, { color: darkMode ? '#fff' : '#111' }]}>
        STEMM LAB APP
      </Text>

      <Text style={[styles.title, { color: darkMode ? '#fff' : '#111' }]}>
        Reaction Board Challenge
      </Text>

      <Text style={[styles.description, { color: darkMode ? '#fff' : '#111' }]}>
        Tap as quickly as possible when the button turns green. Complete three attempts.
      </Text>

      <ReactionTimer onResult={saveResult} />

      <View style={styles.resultsBox}>
        <Text style={styles.resultText}>Attempt 1: {attempt1 ? `${attempt1} ms` : 'Not Started'}</Text>
        <Text style={styles.resultText}>Attempt 2: {attempt2 ? `${attempt2} ms` : 'Not Started'}</Text>
        <Text style={styles.resultText}>Attempt 3: {attempt3 ? `${attempt3} ms` : 'Not Started'}</Text>
        <Text style={styles.averageText}>Average: {getAverage()}</Text>
      </View>

      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push('/activity6.6' as any)}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
  },
  appTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 21,
    marginBottom: 10,
  },
  resultsBox: {
    marginTop: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#f3f3f3',
  },
  resultText: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 6,
  },
  averageText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop: 8,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 6,
    bottom: 130,
    alignSelf: 'center',
    position: 'absolute',
  },
  backButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    width: '100%',
    borderRadius: 6,
    bottom: 70,
    alignSelf: 'center',
    position: 'absolute',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});