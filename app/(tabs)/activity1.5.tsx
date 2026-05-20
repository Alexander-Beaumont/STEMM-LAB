import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "../global.js";
declare global {
    var activity1Complete: boolean[];
    var activity1DataIndex: number;
    var activity1Data: Object[];
    var activity1Reflection: String;
}


export default function Activity1() {
  
  const [darkMode, setDarkMode] = useState(false);
  const [controlComplete, setControlComplete] = useState(global.activity1Complete[0]);
  const [attempt1Complete, setAttempt1Complete] = useState(global.activity1Complete[1]);
  const [attempt2Complete, setAttempt2Complete] = useState(global.activity1Complete[2]);
  const [attempt3Complete, setAttempt3Complete] = useState(global.activity1Complete[3]);
  if (darkMode!=global.darkmodeEnabled) {
    setDarkMode(global.darkmodeEnabled);
  }

  function goToData(index: number) {
    global.activity1DataIndex = index;
    router.push('/activity1.6')
  }
  let continueCode;
  if (controlComplete&&attempt1Complete&&attempt2Complete&&attempt3Complete) {
    continueCode = (<TouchableOpacity
                    style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
                    onPress={() => router.push("/activity1.9")}>
                    <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Continue</Text>
                  </TouchableOpacity>)
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
      ]}>Parachute Drop</Text>
    
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(0)}> 
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Control</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: controlComplete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color: '#fff'}]}>{controlComplete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(1)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Attempt 1</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: attempt1Complete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color: '#fff'}]}>{attempt1Complete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(2)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Attempt 2</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: attempt2Complete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color:'#fff'}]}>{attempt2Complete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(3)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Attempt 3</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: attempt3Complete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color: '#fff'}]}>{attempt3Complete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>

        {continueCode}
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
    width:"60%",
  },
  statusbox:{
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 10,
    width:"30%",
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