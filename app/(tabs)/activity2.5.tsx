
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "../global.js";
declare global {
    var activity2DataIndex: number;
    var activity2Reflection: String;
}


export default function Activity2() {
  
  const [darkMode, setDarkMode] = useState(false);
  if (darkMode!=global.darkmodeEnabled) {
    setDarkMode(global.darkmodeEnabled);
  }

  function goToData(index: number) {
    global.activity2DataIndex = index;
    router.push('/activity2.6')
  }
    function goToMap(index: number) {
    global.activity2DataIndex = index;
    router.push('/activity2.7')
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
      ]}>Sound Polution</Text>
    
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(0)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Measure Sound 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusbox,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToMap(0)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Show Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(1)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Measure Sound 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusbox,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToMap(1)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Show Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(2)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Measure Sound 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusbox,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToMap(2)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Show Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(3)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Measure Sound 4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusbox,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToMap(3)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Show Location</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(4)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Measure Sound 5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statusbox,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToMap(4)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Show Location</Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity
            style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
            onPress={() => router.push("/activity2.8")}>
            <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Continue</Text>
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
  box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:0,
    padding:0,
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
    marginBottom: 10,
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
    backgroundColor: '#000',
    paddingVertical: 14,
    width: "100%",
    borderRadius: 6,
    bottom: 130,
    alignSelf: 'center',
    position:"absolute",
  },
  optionButton:{
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
    width:"55%",
  },
  statusbox:{
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
    width:"40%",
    overflow: 'hidden',
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
