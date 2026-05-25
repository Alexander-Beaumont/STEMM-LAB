import { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import '../../components/decorators/global';
import BreathingMeter from '../../components/decorators/breathing_meter.js';

export default function Activity77() {
  const [darkMode] = useState((global as any).darkmodeEnabled);

  if (!(global as any).activity7Data) {
    (global as any).activity7Data = {};
  }

  if ((global as any).activity7DataIndex === undefined) {
    (global as any).activity7DataIndex = 0;
  }

  const currentIndex = (global as any).activity7DataIndex;

  if (!(global as any).activity7Data[currentIndex]) {
    (global as any).activity7Data[currentIndex] = {
      rest: null,
      exercise1: null,
      exercise2: null,
    };
  }

  const [result, setResult] = useState(
    (global as any).activity7Data[currentIndex].exercise1
  );

  useFocusEffect(
    useCallback(() => {
      const index = (global as any).activity7DataIndex;
      setResult((global as any).activity7Data[index]?.excercise1 ?? null);
    }, [])
  );

  function saveResult(data: any) {
    const index = (global as any).activity7DataIndex;

    if (!(global as any).activity7Data[index]) {
      (global as any).activity7Data[index] = {
        rest: null,
        exercise1: null,
        exercise2: null,
      };
    }

    (global as any).activity7Data[index].excercise1 = data.summary;
    setResult(data.summary);
  }

  function goNext() {
    const membersLength = (global as any).members?.length ?? 1;

    if ((global as any).activity7DataIndex < membersLength - 1) {
      (global as any).activity7DataIndex += 1;
        router.push('/activity7.8' as any);      return;
    }

    (global as any).activity7DataIndex = 0;
    router.push('/activity7.8' as any);
  }

  const memberName =
    (global as any).members?.[(global as any).activity7DataIndex]?.name ??
    'Team member';

  const memberCount = (global as any).members?.length ?? 1;

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? '#111' : '#fff' }]}>
      <Text style={[styles.appTitle, { color: darkMode ? '#fff' : '#111' }]}>
        STEMM LAB APP
      </Text>

      <Text style={[styles.title, { color: darkMode ? '#fff' : '#111' }]}>
        Breathing Pace Trainer
      </Text>

      <Text style={[styles.phaseTitle, { color: darkMode ? '#fff' : '#111' }]}>
        Phase 2: After Exercise 1
      </Text>

      <Text style={[styles.memberText, { color: darkMode ? '#fff' : '#111' }]}>
        {memberName}
      </Text>

      <Text style={[styles.memberCount, { color: darkMode ? '#aaa' : '#555' }]}>
        Team Member {(global as any).activity7DataIndex + 1} of {memberCount}
      </Text>

      <Text style={[styles.description, { color: darkMode ? '#fff' : '#111' }]}>
        Jog on the spot for one minute, then place the phone on your chest and measure breathing again.
      </Text>

      <BreathingMeter onResult={saveResult} />

      <View style={[styles.resultsBox, { backgroundColor: darkMode ? '#333' : '#f3f3f3' }]}>
        <Text style={[styles.resultText, { color: darkMode ? '#fff' : '#111' }]}>
          Rest result: {result ?? 'Not Started'}
        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={goNext}>
        <Text style={styles.buttonText}>
          {(global as any).activity7DataIndex < memberCount - 1
            ? 'Next Team Member'
            : 'Next Phase'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 55 },
  appTitle: { textAlign: 'center', fontSize: 20, fontWeight: '700', marginBottom: 25 },
  title: { textAlign: 'center', fontSize: 22, fontWeight: '700', marginBottom: 8 },
  phaseTitle: { textAlign: 'center', fontSize: 18, fontWeight: '700', marginBottom: 12 },
  memberText: { textAlign: 'center', fontSize: 18, fontWeight: '700' },
  memberCount: { textAlign: 'center', fontSize: 14, marginBottom: 14 },
  description: { fontSize: 15, textAlign: 'center', lineHeight: 21, marginBottom: 10 },
  resultsBox: { marginTop: 12, padding: 12, borderWidth: 1, borderColor: '#ddd', borderRadius: 10 },
  resultText: { textAlign: 'center', fontWeight: '600' },
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
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
});