import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Decorator from './decorator.js';
import firebase from 'firebase/compat/app';
import { doc, updateDoc } from "firebase/firestore"; 


import {
  AudioModule,
  useAudioRecorder,
  useAudioRecorderState,
  setAudioModeAsync,
} from 'expo-audio';

const recordingOptions = {
  isMeteringEnabled: true,
  android: {
    extension: '.m4a',
    outputFormat: 'mpeg4',
    audioEncoder: 'aac',
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
  },
  ios: {
    extension: '.m4a',
    outputFormat: 'mpeg4aac',
    audioQuality: 'high',
    sampleRate: 44100,
    numberOfChannels: 1,
    bitRate: 128000,
  },
};

export function classifySound(meterValue) {
  if (typeof meterValue !== 'number') return 'Not measuring';

  if (meterValue < -50) return 'Quiet';
  if (meterValue < -25) return 'Normal';
  return 'Loud';
}

export function getApproxDb(meterValue) {
  if (typeof meterValue !== 'number') return null;
  return Math.round(meterValue + 100);
}

export function SoundMeter({ onSoundChange }) {
  const recorder = useAudioRecorder(recordingOptions);
  const recorderState = useAudioRecorderState(recorder, 500);

  const [measuring, setMeasuring] = useState(false);

  const meterValue = recorderState.metering;
  const approxDb = getApproxDb(meterValue);
  const soundLevel = measuring ? classifySound(meterValue) : 'Not measuring';

  async function startMeasuring() {
    try {
      if (measuring) return;

      const permission = await AudioModule.requestRecordingPermissionsAsync();

      if (!permission.granted) {
        alert('Microphone permission is required.');
        return;
      }

      await setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
      });

      await recorder.prepareToRecordAsync();
      recorder.record();

      setMeasuring(true);
      console.log('Recording started');
    } catch (error) {
      console.log('Start measuring error:', error);
    }
  }

  async function stopMeasuring() {
    try {
      global.activity2Data[global.activity2DataIndex].volume = global.highest;
      const dtb = firebase.firestore();
      const ref = doc(dtb, 'Teams', global.team.trim());
      switch(global.activity2DataIndex) {
        case 0:
          updateDoc(ref, { 
            "activity2Data.0.volume": global.highest,
          });
          break;
        case 1:
          updateDoc(ref, { 
            "activity2Data.1.volume": global.highest,
          });
          break;
        case 2:
          updateDoc(ref, { 
            "activity2Data.2.volume": global.highest,
          });
          break;
        case 3:
          updateDoc(ref, { 
            "activity2Data.3.volume": global.highest,
          });
          break;
        case 4:
          updateDoc(ref, { 
            "activity2Data.4.volume": global.highest,
          });
          break;

      }
      global.highest = 0;
      if (!measuring) return;

      await recorder.stop();
      setMeasuring(false);
    } catch (error) {
      console.log('Stop measuring error:', error);
      setMeasuring(false);
    }
  }

  React.useEffect(() => {
    
    if (onSoundChange) {
      onSoundChange({
        rawMeterValue: meterValue,
        approxDb,
        soundLevel,
        isMeasuring: measuring,
      });
      if (approxDb>highest) {
        global.highest = approxDb
      }
    }
  }, [meterValue, approxDb, soundLevel, measuring]);
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  return (
    <View style={styles.container}>
      <Text style={[styles.title,{color: darkMode ? '#fff' : '#111'}]}>Sound Meter</Text>

      <Text style={[styles.level,{color: darkMode ? '#fff' : '#111'}]}>{soundLevel}</Text>

      <Text style={[styles.meter,{color: darkMode ? '#fff' : '#111'}]}>
        Approximate dB: {approxDb ?? '0'}
      </Text>
      {measuring ? (
        <TouchableOpacity style={[styles.button,{backgroundColor: darkMode ? '#fff' : '#111'}]} onPress={stopMeasuring}>
          <Text style={[styles.buttonText,{color: darkMode ? '#111' : '#fff'}]}>Stop Measuring</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={[styles.button,{backgroundColor: darkMode ? '#fff' : '#111'}]} onPress={startMeasuring}>
          <Text style={[styles.buttonText,{color: darkMode ? '#111' : '#fff'}]}>Start Measuring</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default class SoundDecorator extends Decorator {
  getCode() {
    return <SoundMeter />;
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    padding: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  level: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 16,
  },
  meter: {
    textAlign: 'center',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 12,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});