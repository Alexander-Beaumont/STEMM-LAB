import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, updateDoc  } from "firebase/firestore";

export default function Activity4() {
  const [hasRun, setHasRun] = useState(false);
    const db = firebase.firestore();
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  let currentActivity = global.activity4Data[global.activity4DataIndex] as any;
  const [vibration, setVibration] = useState(currentActivity.vibration);
  const [outcome, setOutcome] = useState(currentActivity.outcome);
  
  if (!hasRun) {
    async () => {
      const teamsRef = collection(db, "Teams");

      const q = query(teamsRef, where("team", "==", global.team.trim()));
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        currentActivity.vibration = doc.data().activity4Data[global.activity4DataIndex].vibration
        currentActivity.outcome = doc.data().activity4Data[global.activity4DataIndex].outcome
        setVibration(currentActivity.vibration)
        setOutcome(currentActivity.outcome)
      });
    }
    setHasRun(true);
  }

  function inputData() {
    currentActivity.vibration = vibration;
    currentActivity.outcome = outcome;
    const teamRef = doc(db, 'Teams', global.team.trim());
    switch (global.activity4DataIndex) {
      case 0:
        updateDoc(teamRef, {
          "activity4Data.0.vibration": vibration,
          "activity4Data.0.outcome": outcome,
        });
      break;
      case 1:
        updateDoc(teamRef, {
          "activity4Data.1.vibration": vibration,
          "activity4Data.1.outcome": outcome,
        });
      break;
      case 2:
        updateDoc(teamRef, {
          "activity4Data.2.vibration": vibration,
          "activity4Data.2.outcome": outcome,
        });
      break;
    }
    if (vibration!=""&&outcome!=""&&vibration!=null&&outcome!=null) {
        global.activity4Complete[global.activity4DataIndex] = true;
        switch (global.activity1DataIndex) {
          case 0:
            updateDoc(teamRef, {
              "activity4Complete.0": true,
            });
          break;
          case 1:
            updateDoc(teamRef, {
              "activity4Complete.1": true,
            });
          break;
          case 2:
            updateDoc(teamRef, {
              "activity4Complete.2": true,
            });
          break;
      }
    }
    else {
        global.activity4Complete[global.activity4DataIndex] = false;
        switch (global.activity1DataIndex) {
          case 0:
            updateDoc(teamRef, {
              "activity4Complete.0": false,
            });
          break;
          case 1:
            updateDoc(teamRef, {
              "activity4Complete.1": false,
            });
          break;
          case 2:
            updateDoc(teamRef, {
              "activity4Complete.2": false,
            });
          break;
    }
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