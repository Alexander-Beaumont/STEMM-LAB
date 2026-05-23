import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import "../global.js";
declare global {
    var activity4Complete: boolean[];
    var activity4DataIndex: number;
    var activity4Data: Object[];
    var activity4Reflection: String;
    var activity6Reflection: String;
    var activity7Reflection: String;
    var team: String;
    var score: number;
}


export default function Activity4() {
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  const [attempt1Complete, setAttempt1Complete] = useState(global.activity4Complete[0]);
  const [attempt2Complete, setAttempt2Complete] = useState(global.activity4Complete[1]);
  const [attempt3Complete, setAttempt3Complete] = useState(global.activity4Complete[2]);

  function goToData(index: number) {
    global.activity4DataIndex = index;
    router.push('/activity4.6')
  }
  let continueCode;
  if (attempt1Complete&&attempt2Complete&&attempt3Complete) {
    continueCode = (<TouchableOpacity
                    style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
                    onPress={() => router.push("/activity4.7")}>
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
      ]}>Earthquake Resistant Structure</Text>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(0)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Design 1</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: attempt1Complete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color: '#fff'}]}>{attempt1Complete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(1)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Design 2</Text>
        </TouchableOpacity>
        <View style={[styles.statusbox,
        {backgroundColor: attempt2Complete ? '#0d5806' : '#580606'}]}>
            <Text style={[styles.buttonText,{color:'#fff'}]}>{attempt2Complete ? 'Complete' : "Incomplete"}</Text>
        </View>
      </View>
      <View style={styles.box}>
        <TouchableOpacity style={[styles.optionButton,
        {backgroundColor: darkMode ? '#444' : '#ddd'}]} onPress={() => goToData(2)}>
            <Text style={[styles.buttonText,{color: darkMode ? '#fff' : '#111'}]}>Design 3</Text>
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