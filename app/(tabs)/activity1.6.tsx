import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, updateDoc  } from "firebase/firestore";




export default function Activity1() {
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  const [hasRun, setHasRun] = useState(false);
  let currentActivity = global.activity1Data[global.activity1DataIndex] as any;
  const db = firebase.firestore();

  const [time, setTime] = useState(currentActivity.time);
  const [mass, setMass] = useState(currentActivity.mass);
  const [height, setHeight] = useState(currentActivity.height);
  const [accuracy, setAccuracy] = useState(currentActivity.accuracy);
  
  if (!hasRun) {
    async () => {
      const teamsRef = collection(db, "Teams");

      const q = query(teamsRef, where("team", "==", global.team.trim()));
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        currentActivity.time = doc.data().activity1Data[global.activity1DataIndex].time
        currentActivity.mass = doc.data().activity1Data[global.activity1DataIndex].mass
        currentActivity.height = doc.data().activity1Data[global.activity1DataIndex].height
        currentActivity.accuracy = doc.data().activity1Data[global.activity1DataIndex].accuracy
        currentActivity.video = doc.data().activity1Data[global.activity1DataIndex].video
        setTime(currentActivity.time)
        setMass(currentActivity.mass)
        setHeight(currentActivity.height)
        setAccuracy(currentActivity.accuracy)
      });
    }
    setHasRun(true);
  }
  
  

  async function inputData() {
    currentActivity.time = time;
    currentActivity.mass = mass;
    currentActivity.height = height;
    currentActivity.accuracy = accuracy;

    const teamRef = doc(db, 'Teams', global.team.trim());
    switch (global.activity1DataIndex) {
      case 0:
        await updateDoc(teamRef, {
          "activity1Data.0.time": time,
          "activity1Data.0.mass": mass,
          "activity1Data.0.height": height,
          "activity1Data.0.accuracy": accuracy,
          "activity1Data.0.video": currentActivity.video,
        });
      break;
      case 1:
        await updateDoc(teamRef, {
          "activity1Data.1.time": time,
          "activity1Data.1.mass": mass,
          "activity1Data.1.height": height,
          "activity1Data.1.accuracy": accuracy,
          "activity1Data.1.video": currentActivity.video,
        });
      break;
      case 2:
        await updateDoc(teamRef, {
          "activity1Data.2.time": time,
          "activity1Data.2.mass": mass,
          "activity1Data.2.height": height,
          "activity1Data.2.accuracy": accuracy,
          "activity1Data.2.video": currentActivity.video,
        });
      break;
      case 3:
        await updateDoc(teamRef, {
          "activity1Data.3.time": time,
          "activity1Data.3.mass": mass,
          "activity1Data.3.height": height,
          "activity1Data.3.accuracy": accuracy,
          "activity1Data.3.video": currentActivity.video,
        });
      break;
    }


    if (time!=""&&mass!=""&&height!=""&&accuracy!=""&&time!=null&&mass!=null&&height!=null&&accuracy!=null) {
      global.activity1Complete[global.activity1DataIndex] = true;
      switch (global.activity1DataIndex) {
        case 0:
          await updateDoc(teamRef, {
            "activity1Complete.0": true,
          });
        break;
        case 1:
          await updateDoc(teamRef, {
            "activity1Complete.1": true,
          });
        break;
        case 2:
          await updateDoc(teamRef, {
            "activity1Complete.2": true,
          });
        break;
        case 3:
          await updateDoc(teamRef, {
            "activity1Complete.3": true,
          });
        break;
      }
    }
    else {
        global.activity1Complete[global.activity1DataIndex] = false;
        switch (global.activity1DataIndex) {
        case 0:
          await updateDoc(teamRef, {
            "activity1Complete.0": false,
          });
        break;
        case 1:
          await updateDoc(teamRef, {
            "activity1Complete.1": false,
          });
        break;
        case 2:
          await updateDoc(teamRef, {
            "activity1Complete.2": false,
          });
        break;
        case 3:
          await updateDoc(teamRef, {
            "activity1Complete.3": false,
          });
        break;
      }
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