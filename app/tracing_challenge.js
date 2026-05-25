import React, { useRef, useState } from 'react';
import { PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TracingChallenge({ onResult }) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [targetX, setTargetX] = useState(20);
  const [targetY, setTargetY] = useState(40);
  const [fingerX, setFingerX] = useState(null);
  const [fingerY, setFingerY] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [delay, setDelay] = useState(null);

  const startTimeRef = useRef(null);
  const accuracyRef = useRef(null);
  const targetXRef = useRef(20);
  const targetYRef = useRef(40);

  const totalDistance = 260;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => started && !finished,
      onMoveShouldSetPanResponder: () => started && !finished,

      onPanResponderMove: (event) => {
        const touchX = event.nativeEvent.locationX;
        const touchY = event.nativeEvent.locationY;

        setFingerX(touchX);
        setFingerY(touchY);

        const xDistance = touchX - targetXRef.current;
        const yDistance = touchY - targetYRef.current;

        const distanceFromTarget = Math.sqrt(
          xDistance * xDistance + yDistance * yDistance
        );

        const roundedAccuracy = distanceFromTarget.toFixed(1);

        setAccuracy(roundedAccuracy);
        accuracyRef.current = roundedAccuracy;
      },
    })
  ).current;

    function finishChallenge() {
    if (finished) return;

    const resultDelay = Date.now() - startTimeRef.current;
    const finalAccuracy = accuracyRef.current ?? 'Not recorded';

    setDelay(resultDelay);
    setAccuracy(finalAccuracy);
    setFinished(true);
    setStarted(false);

    if (onResult) {
        onResult({
        accuracy: finalAccuracy,
        delay: resultDelay,
        summary: `Accuracy: ${finalAccuracy}px, Delay: ${resultDelay}ms`,
        });
    }
    }

  function startChallenge() {
    setStarted(true);
    setFinished(false);

    let position = 20;

    setTargetX(20);
    setTargetY(40);
    targetXRef.current = 20;
    targetYRef.current = 40;

    setFingerX(null);
    setFingerY(null);
    setAccuracy(null);
    setDelay(null);
    accuracyRef.current = null;

    const startedAt = Date.now();
    startTimeRef.current = startedAt;

    const interval = setInterval(() => {
      position += 10;

      const nextX = position;
      const nextY = 70 + Math.sin(position / 30) * 40;

      setTargetX(nextX);
      setTargetY(nextY);

      targetXRef.current = nextX;
      targetYRef.current = nextY;

      if (position >= totalDistance) {
        clearInterval(interval);
        finishChallenge();
      }
    }, 250);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracing Challenge</Text>

      <View style={styles.traceArea} {...panResponder.panHandlers}>
        <View style={[styles.target, { left: targetX, top: targetY }]} />

        {fingerX !== null && fingerY !== null && (
          <View style={[styles.fingerMarker, { left: fingerX, top: fingerY }]} />
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={startChallenge}>
        <Text style={styles.buttonText}>
          {started && !finished ? 'Restart Challenge' : 'Start Challenge'}
        </Text>
      </TouchableOpacity>

      {finished && (
        <Text style={styles.result}>
          Accuracy: {accuracy ? `${accuracy}px` : 'Not Recorded'} | Delay: {delay ? `${delay}ms` : 'Not Recorded'}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
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
  traceArea: {
    height: 180,
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    marginVertical: 14,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  target: {
    position: 'absolute',
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00aa00',
  },
  fingerMarker: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  result: {
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});