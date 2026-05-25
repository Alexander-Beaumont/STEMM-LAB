import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { router } from 'expo-router';
import '../../components/decorators/global';

export default function Activity78() {
  const [darkMode] = useState((global as any).darkmodeEnabled);

  const members = (global as any).members ?? [];
  const data = (global as any).activity7Data ?? {};

  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: darkMode ? '#111' : '#fff' },
      ]}
    >
      <Text style={[styles.appTitle, { color: darkMode ? '#fff' : '#111' }]}>
        STEMM LAB APP
      </Text>

      <Text style={[styles.title, { color: darkMode ? '#fff' : '#111' }]}>
        Breathing Results
      </Text>

      {members.map((member: any, index: number) => (
        <View
          key={index}
          style={[
            styles.card,
            { backgroundColor: darkMode ? '#333' : '#f3f3f3' },
          ]}
        >
          <Text style={[styles.memberName, { color: darkMode ? '#fff' : '#111' }]}>
            {member.name}
          </Text>

          <Text style={[styles.resultText, { color: darkMode ? '#fff' : '#111' }]}>
            Rest: {data[index]?.rest ?? 'Not Started'}
          </Text>

          <Text style={[styles.resultText, { color: darkMode ? '#fff' : '#111' }]}>
            After Exercise 1: {data[index]?.exercise1 ?? 'Not Started'}
          </Text>

          <Text style={[styles.resultText, { color: darkMode ? '#fff' : '#111' }]}>
            After Exercise 2: {data[index]?.exercise2 ?? 'Not Started'}
          </Text>
        </View>
      ))}

      <Text style={[styles.discussion, { color: darkMode ? '#fff' : '#111' }]}>
        Breathing movement usually increases after exercise because the body needs more oxygen for working muscles.
      </Text>

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </ScrollView>
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
    marginBottom: 20,
  },
  card: {
    padding: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 12,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  resultText: {
    fontSize: 14,
    marginBottom: 5,
  },
  discussion: {
    textAlign: 'center',
    lineHeight: 21,
    marginTop: 12,
    marginBottom: 30,
  },
  backButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginBottom: 80,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});