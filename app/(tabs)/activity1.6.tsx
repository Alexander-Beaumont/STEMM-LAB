import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";

export default function Activity1() {
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  let currentActivity = global.activity1Data[global.activity1DataIndex] as any;
  const [time, setTime] = useState(currentActivity.time);
  const [mass, setMass] = useState(currentActivity.mass);
  const [height, setHeight] = useState(currentActivity.height);
  const [accuracy, setAccuracy] = useState(currentActivity.accuracy);

  function inputData() {
    currentActivity.time = time;
    currentActivity.mass = mass;
    currentActivity.height = height;
    currentActivity.accuracy = accuracy;
    if (time!=""&&mass!=""&&height!=""&&accuracy!=""&&time!=null&&mass!=null&&height!=null&&accuracy!=null) {
        global.activity1Complete[global.activity1DataIndex] = true;
    }
    else {
        global.activity1Complete[global.activity1DataIndex] = false;
    }
    router.push("/activity1.5")
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
        <View style={styles.boxAround}>
            <TouchableOpacity
                style={[styles.smallButton,{backgroundColor: '#3eb8f1',}]}
                onPress={()=>{router.push("/activity1.7")}}>
                <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Record Video</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.smallButton,{backgroundColor: '#3eb8f1',}]}
                onPress={()=>{router.push("/activity1.8")}}>
                <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>View Video</Text>
            </TouchableOpacity>
        </View>
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color: darkMode ? '#000' : '#fff'}]}>Time spent falling</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ? '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Time (s)" value={time} onChangeText={(e) => setTime(e)} />
      </View>
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color: darkMode ? '#000' : '#fff'}]}>Mass</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ? '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Mass (kg)" value={mass} onChangeText={(e) => setMass(e)}/>
      </View>
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color:darkMode ? '#000' : '#fff'}]}>Height</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ?  '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Height (m)" value={height} onChangeText={(e) => setHeight(e)}/>
      </View>
      <View style={styles.box}>
        <View style={[styles.optionButton,
        {backgroundColor: darkMode ? '#ddd' : '#444'}]}>
            <Text style={[styles.buttonText,{color: darkMode ? '#000' : '#fff'}]}>Accuracy</Text>
        </View>
        <TextInput style={[styles.input,
                  {backgroundColor: darkMode ?  '#bbb' : '#666',
                  color: darkMode ? '#444' : '#fff',}
                ]}
                  placeholderTextColor={darkMode ? '#444' : '#ddd'}
                  placeholder="Accuracy (cm)" value={accuracy} onChangeText={(e) => setAccuracy(e)} />
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
    marginTop: -15,
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