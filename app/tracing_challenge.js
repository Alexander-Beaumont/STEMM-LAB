import React, { useRef, useState } from 'react';
import { PanResponder, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TracingChallenge({ onResult }) {
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);
  const [targetX, setTargetX] = useState(20);
  const [targetY, setTargetY] = useState(40);
  const [fingerX, setFingerX] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [delay, setDelay] = useState(null);

  const totalDistance = 260;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => started && !finished,
      onMoveShouldSetPanResponder: () => started && !finished,

      onPanResponderMove: (event) => {
        const touchX = event.nativeEvent.locationX;
        setFingerX(touchX);

        const distanceFromTarget = Math.abs(touchX - targetX);
        setAccuracy(distanceFromTarget.toFixed(1));
      },

      onPanResponderRelease: () => {
        if (!started || finished) return;

        const resultDelay = Date.now() - startTime;
        const finalAccuracy = accuracy ?? 'N/A';

        setDelay(resultDelay);
        setFinished(true);

        if (onResult) {
          onResult({
            accuracy: finalAccuracy,
            delay: resultDelay,
            summary: `Accuracy: ${finalAccuracy}px, Delay: ${resultDelay}ms`,
          });
        }
      },
    })
  ).current;

    function startChallenge() {
    setStarted(true);
    setFinished(false);

    let position = 20;

    setTargetX(20);
    setTargetY(40);

    setFingerX(null);
    setAccuracy(null);
    setDelay(null);
    setStartTime(Date.now());

    const interval = setInterval(() => {
        position += 10;

        setTargetX(position);
        setTargetY(70 + Math.sin(position / 30) * 40);

        if (position >= totalDistance) {
        clearInterval(interval);
        }
    }, 250);
    }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tracing Challenge</Text>


      <View style={styles.traceArea} {...panResponder.panHandlers}>
            <View style={[styles.target, { left: targetX, top: targetY }]} />
        {fingerX !== null && (
          <View style={[styles.fingerMarker, { left: fingerX }]} />
        )}
      </View>



      <TouchableOpacity style={styles.button} onPress={startChallenge}>
        <Text style={styles.buttonText}>
          {started && !finished ? 'Restart Challenge' : 'Start Challenge'}
        </Text>
      </TouchableOpacity>
            <Text style={styles.result}>
        Accuracy: {accuracy ? `${accuracy}px` : 'Not Started'}
      </Text>

      <Text style={styles.result}>
        Delay: {delay ? `${delay}ms` : 'Not Finished'}
      </Text>
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
  instructions: {
    textAlign: 'center',
    marginVertical: 4,
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
    top: 30,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#00aa00',
  },
  fingerMarker: {
    position: 'absolute',
    top: 35,
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#000',
  },
  result: {
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 6,
  },
  button: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});