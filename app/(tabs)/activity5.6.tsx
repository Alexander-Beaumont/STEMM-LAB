import { useCallback, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Switch } from 'react-native';
import { router } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native';
import '../global.js';
import { activity5Results } from '../global.js';

function getCompletionStatus(result: string) {
  if (result === 'Not Started') {
    return {
      text: 'To Do',
      style: styles.todo,
    };
  }
  return {
    text: 'Complete',
    style: styles.complete,
  };
}

export default function Activity5() {
const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
const [movement1Result, setMovement1Result] = useState(activity5Results.movement1);
const [movement2Result, setMovement2Result] = useState(activity5Results.movement2);
const [movement3Result, setMovement3Result] = useState(activity5Results.movement3);

const movement1Status = getCompletionStatus(movement1Result);
const movement2Status = getCompletionStatus(movement2Result);
const movement3Status = getCompletionStatus(movement3Result);


useFocusEffect(
    useCallback(() => {
        setMovement1Result(activity5Results.movement1);
        setMovement2Result(activity5Results.movement2);
        setMovement3Result(activity5Results.movement3);
    }, [])
    );

  const [feedbackEnabled, setFeedbackEnabled] = useState(false);

  return (
    <View
    style={[
        styles.container,
        { backgroundColor: darkMode ? '#111' : '#fff' },
    ]}
    >
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={() => router.push('/' as any)}>
          <Text style={[styles.icon, { color: darkMode ? '#fff' : '#111' }]}>⌂</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/settings' as any)}>
            <Text style={[styles.icon, { color: darkMode ? '#fff' : '#111' }]}>
                ⚙
            </Text>
            </TouchableOpacity>
      </View>

      <Text style={[styles.appTitle, { color: darkMode ? '#fff' : '#111' }]}>STEMM LAB APP</Text>
      <Text style={[styles.title, { color: darkMode ? '#fff' : '#111' }]}>Human Performance Lab</Text>

      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.movementButton,
            { backgroundColor: darkMode ? '#ddd' : '#c7c3c3' },
            ]}
          onPress={() =>
            router.push({
              pathname: '/activity5_sensor' as any,
              params: {
                movement: 'Movement 1',
                feedback: feedbackEnabled ? 'true' : 'false',
              },
            })
          }
        >
          <Text style={styles.buttonTextDark}>Movement 1</Text>
        </TouchableOpacity>

        <View style={[ 
            styles.resultBox, 
            { backgroundColor: darkMode ? '#333' : '#f3eeee' },
            ]}
        >
          <Text style={styles.resultText}>{movement1Result}</Text>
        </View>

        <View style={[styles.statusBox, movement1Status.style]}>
            <Text style={styles.statusText}>
                {movement1Status.text}
            </Text>
        </View>
        </View>
        
      <View style={styles.row}>
        <TouchableOpacity
          style={[
            styles.movementButton,
            { backgroundColor: darkMode ? '#ddd' : '#c7c3c3' },
        ]} 
          onPress={() =>
            router.push({
              pathname: '/activity5_sensor' as any,
              params: {
                movement: 'Movement 2',
                feedback: feedbackEnabled ? 'true' : 'false',
              },
            })
          }
        >
          <Text style={styles.buttonTextDark}>Movement 2</Text>
        </TouchableOpacity>

        <View style={[
            styles.resultBox,
            { backgroundColor: darkMode ? '#333' : '#f3eeee' },
            ]}
            >
            <Text style={styles.resultText}>{movement2Result}</Text>
        </View>

        <View style={[styles.statusBox, movement2Status.style]}>
            <Text style={styles.statusText}>
                {movement2Status.text}
            </Text>
        </View>
        </View>

      <View style={styles.row}>
        <TouchableOpacity
          style={[ 
            styles.movementButton, 
            { backgroundColor: darkMode ? '#ddd' : '#c7c3c3' }, 
        ]}
          onPress={() =>
            router.push({
              pathname: '/activity5_sensor' as any,
              params: {
                movement: 'Movement 3',
                feedback: feedbackEnabled ? 'true' : 'false',
              },
            })
          }
        >
          <Text style={styles.buttonTextDark}>Movement 3</Text>
        </TouchableOpacity>

        <View style={[ 
            styles.resultBox,
            { backgroundColor: darkMode ? '#333' : '#f3eeee' },
        ]}
>
            <Text style={styles.resultText}>{movement3Result}</Text>
        </View>

        <View style={[styles.statusBox, movement3Status.style]}>
            <Text style={styles.statusText}>
                {movement3Status.text}
            </Text>
        </View>
        </View>

      <View style={styles.feedbackRow}>
        <Text style={[ styles.feedbackLabel,
            { color: darkMode ? '#fff' : '#111' },
                ]} >Enable vibration feedback</Text>

        <Switch
          value={feedbackEnabled}
          onValueChange={setFeedbackEnabled}
        />
      </View>
    
      <TouchableOpacity style={styles.continueButton}
      onPress={() => router.push('/activity5.7' as any)}>
        <Text style={styles.continueButtonText}>Continue</Text>
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
    paddingHorizontal: 24,
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
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 40,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 14,
  },
  movementButton: {
    flex: 1.2,
    backgroundColor: '#c7c3c3',
    paddingVertical: 12,
    borderRadius: 6,
  },
  resultBox: {
    flex: 1,
    backgroundColor: '#f3eeee',
    paddingVertical: 12,
    borderRadius: 6,
  },
  statusBox: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 6,
  },
  complete: {
    backgroundColor: '#00ff3b',
  },
  inProgress: {
    backgroundColor: '#ffff00',
  },
  todo: {
    backgroundColor: '#ff1f1f',
  },
  buttonTextDark: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
  },
  resultText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 12,
  },
  statusText: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '600',
    fontSize: 12,
  },
  feedbackRow: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  feedbackLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  backButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    width: "100%",
    borderRadius: 6,
    bottom: 70,
    alignSelf: 'center',
    position:"absolute",
    },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    width: "100%",
    borderRadius: 6,
    bottom: 130,
    alignSelf: 'center',
    position:"absolute",
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  continueButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});