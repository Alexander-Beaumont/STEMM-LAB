import { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import '../global.js';
import TracingChallenge from '../tracing_challenge';

export default function Activity67() {
  const [darkMode] = useState((global as any).darkmodeEnabled);

  if (!(global as any).activity6Data) {
    (global as any).activity6Data = {};
  }

  if ((global as any).activity6DataIndex === undefined) {
    (global as any).activity6DataIndex = 0;
  }

  const currentIndex = (global as any).activity6DataIndex;

  if (!(global as any).activity6Data[currentIndex]) {
    (global as any).activity6Data[currentIndex] = {
      attempt1: null,
      attempt2: null,
      attempt3: null,
    };
  }

  const currentMemberData = (global as any).activity6Data[currentIndex];

  const [attempt3, setAttempt3] = useState(currentMemberData.attempt3);

  useFocusEffect(
    useCallback(() => {
      const index = (global as any).activity6DataIndex;

      if (!(global as any).activity6Data[index]) {
        (global as any).activity6Data[index] = {
          attempt1: null,
          attempt2: null,
          attempt3: null,
        };
      }

      setAttempt3((global as any).activity6Data[index].attempt3);
    }, [])
  );

function saveResult(result: any) {
  const index = (global as any).activity6DataIndex;

  if (!(global as any).activity6Data[index]) {
    (global as any).activity6Data[index] = {
      attempt1: null,
      attempt2: null,
      attempt3: null,
    };
  }

  (global as any).activity6Data[index].attempt3 = result.summary;
  setAttempt3(result.summary);
}

  function goNext() {
    const membersLength = (global as any).members?.length ?? 1;

    if ((global as any).activity6DataIndex < membersLength - 1) {
      (global as any).activity6DataIndex += 1;
      router.replace('/activity6.7' as any);
      return;
    }

    (global as any).activity6DataIndex = 0;
    router.push('/activity6.8' as any);
  }

  const memberName =
    (global as any).members?.[(global as any).activity6DataIndex]?.name ??
    'Team member';

  const memberCount = (global as any).members?.length ?? 1;

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

      <Text style={[styles.phaseTitle, { color: darkMode ? '#fff' : '#111' }]}>
        Phase 3: Tracing Challenge
      </Text>

      <Text style={[styles.memberText, { color: darkMode ? '#fff' : '#111' }]}>
        {memberName}
      </Text>

      <Text style={[styles.memberCount, { color: darkMode ? '#aaa' : '#555' }]}>
        Team Member {(global as any).activity6DataIndex + 1} of {memberCount}
      </Text>


      <TracingChallenge onResult={saveResult} />
      
      <View
        style={[
          styles.resultsBox,
          { backgroundColor: darkMode ? '#333' : '#f3f3f3' },
        ]}
      >
        <Text style={[styles.resultText, { color: darkMode ? '#fff' : '#111' }]}>
            Tracing result: {attempt3 ?? 'Not Started'}        </Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={goNext}>
        <Text style={styles.buttonText}>
          {(global as any).activity6DataIndex < memberCount - 1
            ? 'Next Team Member'
            : 'Continue'}
        </Text>
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
    marginBottom: 25,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  phaseTitle: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  memberText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },
  memberCount: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 14,
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
  },
  resultText: {
    textAlign: 'center',
    fontWeight: '600',
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