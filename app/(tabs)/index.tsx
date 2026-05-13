import { router } from 'expo-router';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

     <View style={styles.topIcons}>
      <Text style={styles.icon}>▮▮▮</Text>
      <Text style={styles.icon}>⌂</Text>
      
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Text style={styles.icon}>⚙</Text>
      </TouchableOpacity>
     </View>


      

      <Text style={styles.title}>STEMM LAB APP</Text>

      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name:" />
        <TextInput style={styles.input} placeholder="Grade" />
        <TextInput style={styles.input} placeholder="Team name" />
      </View>

      <TouchableOpacity style={styles.smallButton}>
        <Text style={styles.buttonText}>Add Team member</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <View style={styles.homeIndicator} />
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
    marginBottom: 40,
  },
  icon: {
    fontSize: 22,
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 90,
  },
  form: {
    gap: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 42,
    fontSize: 14,
  },
  smallButton: {
    alignSelf: 'center',
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginTop: 100,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 90,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  homeIndicator: {
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 30,
  },
});