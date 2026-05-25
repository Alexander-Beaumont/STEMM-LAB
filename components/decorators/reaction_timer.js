import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ReactionTimer({ onResult }) {
  const [status, setStatus] = useState('ready');
  const [startTime, setStartTime] = useState(null);
  const [reactionTime, setReactionTime] = useState(null);

  function startTest() {
    setStatus('waiting');
    setReactionTime(null);

    const delay = Math.floor(Math.random() * 3000) + 2000;

    setTimeout(() => {
      setStartTime(Date.now());
      setStatus('tap');
    }, delay);
  }

  function handleTap() {
    if (status === 'waiting') {
      setStatus('tooSoon');
      return;
    }

    if (status === 'tap') {
      const result = Date.now() - startTime;
      setReactionTime(result);
      setStatus('done');

      if (onResult) {
        onResult(result);
      }
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reaction Timer</Text>

      <Text style={styles.status}>
        {status === 'ready' && 'Press Start'}
        {status === 'waiting' && 'Wait...'}
        {status === 'tap' && 'TAP NOW!'}
        {status === 'tooSoon' && 'Too soon!'}
        {status === 'done' && `${reactionTime} ms`}
      </Text>

      {status === 'waiting' || status === 'tap' ? (
        <TouchableOpacity
          style={[
            styles.tapArea,
            { backgroundColor: status === 'tap' ? '#00ff3b' : '#444' },
          ]}
          onPress={handleTap}
        >
          <Text style={styles.tapText}>
            {status === 'tap' ? 'TAP!' : 'WAIT'}
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.button} onPress={startTest}>
          <Text style={styles.buttonText}>Start Test</Text>
        </TouchableOpacity>
      )}
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
  status: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 18,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  tapArea: {
    paddingVertical: 50,
    borderRadius: 10,
  },
  tapText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
});