import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";

export default function HomeScreen() {
  
  const [darkMode, setDarkMode] = useState(false);
  if (darkMode!=global.darkmodeEnabled) {
    setDarkMode(global.darkmodeEnabled);
  }
  return (
    <View style={[styles.container,
      {
          backgroundColor: darkMode ? '#111' : '#fff',
      }]}>

     <View style={styles.topIcons}>
      <TouchableOpacity onPress={() => router.push('/leaderboard')}>
        <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>▮▮▮</Text>
      </TouchableOpacity>
      <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>⌂</Text>
      
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>⚙</Text>
      </TouchableOpacity>
     </View>


      

      <Text style={[styles.title,
        {color: darkMode ? '#fff' : '#111'}
      ]}>STEMM LAB APP</Text>

      <View style={styles.form}>
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777',}
        ]}
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Name:" />
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777'}
        ]} 
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Grade" />
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777'}
        ]} 
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Team name" />
      </View>

      <TouchableOpacity style={[styles.smallButton,
      {backgroundColor: darkMode ? '#111' : '#fff'}]}>
        <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Add Team member</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.continueButton,
      {backgroundColor: darkMode ? '#111' : '#fff'}]}>
        <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Continue</Text>
      </TouchableOpacity>

      <View style={[styles.homeIndicator,{backgroundColor: darkMode ? '#fff' : '#111'}]} />
    </View>
  );
}


  const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
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
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginTop: 100,
  },
  continueButton: {
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 90,
  },
  buttonText: {
    textAlign: 'center',
    fontWeight: '600',
  },
  homeIndicator: {
    width: 120,
    height: 5,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 30,
  },
});