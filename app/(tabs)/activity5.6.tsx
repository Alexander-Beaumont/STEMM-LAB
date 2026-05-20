import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import { MovementMeter } from '../movement_meter.js';

export default function Activity5() {
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
        Use your phone’s accelerometer to measure movement smoothness and vibration during a guided stretch.
      </Text>

      <MovementMeter
        onMovementChange={(data: any) => {
          console.log('Movement:', data.movementValue);
          console.log('Level:', data.movementLevel);
        }}
      />

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
    marginBottom: 20,
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 20,
  },
  backButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
  },
});