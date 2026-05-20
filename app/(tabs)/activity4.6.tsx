import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";

export default function Activity4() {
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  let currentActivity = global.activity4Data[global.activity4DataIndex] as any;
  const [vibration, setVibration] = useState(currentActivity.vibration);
  const [outcome, setOutcome] = useState(currentActivity.outcome);

  function inputData() {
    currentActivity.vibration = vibration;
    currentActivity.outcome = outcome;
    if (vibration!=""&&outcome!=""&&vibration!=null&&outcome!=null) {
        global.activity4Complete[global.activity4DataIndex] = true;
    }
    else {
        global.activity4Complete[global.activity4DataIndex] = false;
    }
    router.push("/activity4.5")
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
        ]}>Earthquake Resistant Structure</Text>
        
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color: darkMode ? '#000' : '#fff'}]}>Measured Vibration</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ? '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Vibration" value={vibration} onChangeText={(e) => setVibration(e)} />
      </View>
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color: darkMode ? '#000' : '#fff'}]}>Outcome</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ? '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Outcome" value={outcome} onChangeText={(e) => setOutcome(e)}/>
      </View>
      
        <TouchableOpacity
            style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
            onPress={inputData}>
            <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Submit</Text>
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
  boxAround:{
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    borderRadius: 6,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:"45%",
  },
  smallButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
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
    width:"50%",
  },
  statusbox:{
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
    width:"030%",
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