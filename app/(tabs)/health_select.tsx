import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "../../components/decorators/global.js";

export default function CategoryScreen() {
  
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
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>⌂</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>⚙</Text>
      </TouchableOpacity>
     </View>


      

      <Text style={[styles.title,
        {color: darkMode ? '#fff' : '#111'}
      ]}>STEMM LAB APP</Text>
      <Text style={[styles.title,
        {color: darkMode ? '#fff' : '#111'}
      ]}>Select Health Activity</Text>

      <TouchableOpacity style={[styles.optionButton,
      {backgroundColor: darkMode ? '#444' : '#ddd'}]}>
        <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Human Performance Lab</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.optionButton,
      {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => router.push('/activity6.1')}> 
        <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Reaction Board Challenge</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.optionButton,
      {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => router.push('/activity7.1')}> 
        <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Breathing Pace Trainer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.backButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
        onPress={() => router.back()}>
        <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Back</Text>
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
    marginBottom: 50,
  },
  backButtonText: {
    color: '#fff',
    textAlign: 'center',
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
    padding: 14,
    borderRadius: 6,
    marginTop: 90,
    alignSelf: 'center',
    bottom:9,
    position: 'absolute',
  },
  optionButton:{
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
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
    bottom:2,
    position: 'absolute',
  },
});