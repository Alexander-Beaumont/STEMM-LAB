import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs  } from "firebase/firestore";



import 'firebase/compat/auth';
import 'firebase/compat/firestore';
let activity1Complete = {0:false,1:false,2:false,3:false};
let activity4Complete = {0:false,1:false,2:false};
let activity1Data = {
    0:{time:null,mass:null,height:null,accuracy:null,video:[]},
    1:{time:null,mass:null,height:null,accuracy:null,video:[]},
    2:{time:null,mass:null,height:null,accuracy:null,video:[]},
    3:{time:null,mass:null,height:null,accuracy:null,video:[]}
}
let activity3Data = {
    material1:'',
    material2:'',
    material3:'',
    material4:'',
    bend1:'',
    bend2:'',
    bend3:'',
    bend4:'',
    checkbox1:false,
    checkbox2:false,
    checkbox3:false,
    checkbox4:false,
}
let activity4Data = {
    0:{vibration:null,outcome:null},
    1:{vibration:null,outcome:null},
    2:{vibration:null,outcome:null}
}

let activity5Results = {
  movement1: 'Not Started',
  movement2: 'Not Started',
  movement3: 'Not Started',
};



export default function HomeScreen() {
  // Your Firebase config from Firebase Console
  const firebaseConfig = {
    apiKey: "AIzaSyClWHYSbA2ErhBUhcz1Nb58l-T-LfwrCBM",
    authDomain: "stemm-lab-5a4a2.firebaseapp.com",
    projectId: "stemm-lab-5a4a2",
    storageBucket: "stemm-lab-5a4a2.firebasestorage.app",
    messagingSenderId: "590989126228",
    appId: "1:590989126228:web:e54edb7537f9116c815bc1"
  };

  // Initialize Firebase if not already initialized
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  const db = firebase.firestore();
  const [canContinue, setCanContinue] = useState(false);
  const [hasRun, setHasRun] = useState(0);
  const [hasRun2, setHasRun2] = useState(0);
  const [hasRun3, setHasRun3] = useState(0);
  
  const [feedback, setFeedback] = useState("");
  const [grade, setGrade] = useState("");
  const [name, setName] = useState("");
  const [team, setTeam] = useState("");
  const [password, setPassword] = useState("");
  const  addItem = async () => {
    const citiesRef = collection(db, "Teams");
    // Create a query against the collection.
    const q = query(citiesRef, where("team", "==", team.trim()));
    const querySnapshot = await getDocs(q)
    let savedPassword = "";
    querySnapshot.forEach((doc) => {
      savedPassword = doc.data().password
      global.activity1Complete = doc.data().activity1Complete
      global.team = team
      global.activity4Complete = doc.data().activity4Complete
      global.activity1Data = doc.data().activity1Data
      global.activity3Data = doc.data().activity3Data
      global.activity4Data = doc.data().activity4Data
      global.activity1Reflection = doc.data().activity1Reflection
      global.activity2Reflection = doc.data().activity2Reflection
      global.activity3Reflection = doc.data().activity3Reflection
      global.activity4Reflection = doc.data().activity4Reflection
      global.activity5Reflection = doc.data().activity5Reflection
      global.activity6Reflection = doc.data().activity6Reflection
      global.activity7Reflection = doc.data().activity7Reflection
      global.activity5Results = doc.data().activity5Results
    });
    if (name==""||grade==""||team==""||password=="") {
      setFeedback("All fields must be filled.");
      setCanContinue(false)
    }
    else if (password == savedPassword || savedPassword == "") {
      db.collection('Teams').doc(team.trim()).update({
          members: firebase.firestore.FieldValue.arrayUnion({name:name.trim(), grade : grade.trim() })
      }).catch(error => {
        const teamRef = doc(db, 'Teams', team.trim());
        setDoc(teamRef, { 
          team: team.trim(),
          password: password.trim(),
          activity1Complete: activity1Complete,
          activity4Complete: activity4Complete,
          activity1Data: activity1Data,
          activity3Data: activity3Data,
          activity4Data: activity4Data,
          activity1Reflection: '',
          activity2Reflection: '',
          activity3Reflection: '',
          activity4Reflection: '',
          activity5Reflection: '',
          activity6Reflection: '',
          activity7Reflection: '',
          activity5Results: activity5Results,
          members: [{name:name.trim(), grade : grade.trim() }],
        });
      });
      setFeedback("");
      setCanContinue(true)
    }
    else {
      setFeedback("Wrong Password");
      setCanContinue(false)
    }
    checkDataUpload()
  };
  async function checkDataUpload() {
    const ref = collection(db, "Teams");
    // Create a query against the collection.
    const q = query(ref, where("team", "==", team.trim()));
    const querySnapshot = await getDocs(q)
    let savedPassword = "";
    querySnapshot.forEach((doc) => {
      savedPassword = doc.data().password
    });
    if (savedPassword==""){
      console.log("checkDataUpload: Fail")
    }
    else {
      console.log("checkDataUpload: Pass")
    }
  }
  async function testSubmitWorks() {
    if (hasRun==0) {
      setName("Placeholder Child")
      setGrade("4")
      setTeam("Team Boring")
      setPassword("yes")
      setHasRun(1)
    }
    else if (hasRun==1) {
      await addItem()
      setHasRun(2)
    }
    else if (hasRun==2) {
      if (canContinue) {
        console.log("testSubmitWorks: Pass")
      }
      else {
        console.log("testSubmitWorks: Fail")
      }
      setHasRun(3)
    }
  }
  async function checkPasswordCatching() {
    if (hasRun2==0) {
      setName("Placeholder Child")
      setGrade("4")
      setTeam("Team Boring")
      setPassword("no")
      setHasRun2(1)
    }
    else if (hasRun2==1) {
      await addItem()
      setHasRun2(2)
    }
    else if (hasRun2==2) {
      if (!canContinue) {
        console.log("checkPasswordCatching: Pass")
      }
      else {
        console.log("checkPasswordCatching: Fail")
      }
      setHasRun2(3)
      setHasRun(4)
    }
  }
  async function checkMissingFieldCatching() {
    if (hasRun3==0) {
      setName("Placeholder Child")
      setGrade("")
      setTeam("Team Boring")
      setPassword("no")
      setHasRun3(1)
    }
    else if (hasRun3==1) {
      await addItem()
      setHasRun3(2)
    }
    else if (hasRun3==2) {
      if (!canContinue) {
        console.log("checkMissingFieldCatching: Pass")
      }
      else {
        console.log("checkMissingFieldCatching: Fail")
      }
      setHasRun3(3)
      setHasRun2(4)
    }
  }
  function runTests() {
    if (hasRun<3) {
      testSubmitWorks()
    }
    if (hasRun==3) {
      checkPasswordCatching()
    }
    if (hasRun2==3) {
      checkMissingFieldCatching()
    }
  }
  //runTests()
  const [darkMode, setDarkMode] = useState(false);
  if (darkMode!=global.darkmodeEnabled) {
    setDarkMode(global.darkmodeEnabled);
  }
  let continueCode
  if (canContinue) {
    continueCode = <TouchableOpacity style={[styles.continueButton,
      {backgroundColor: darkMode ? '#fff' : '#111'}]}>
        <Text style={[styles.buttonText,{color: darkMode ? '#111' : '#fff'}]} onPress={() => router.push('/category_select')}>Continue</Text>
      </TouchableOpacity>
  }
  let feedbackCode
  if (feedback) {
    feedbackCode = <Text style={[styles.feedback]}>{feedback}</Text>
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
      {feedbackCode}
      <View style={styles.form}>
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777',}
        ]} value={name} onChangeText={(e) => setName(e)}
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Name:" />
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777'}
        ]}  value={grade} onChangeText={(e) => setGrade(e)}
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Grade:" />
        <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777'}
        ]} value={team} onChangeText={(e) => setTeam(e)}
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Team Name:" />
          <TextInput style={[styles.input,
          {backgroundColor: darkMode ? '#111' : '#fff',
          color: darkMode ? '#fff' : '#777'}
        ]} value={password} onChangeText={(e) => setPassword(e)}
          placeholderTextColor={darkMode ? '#fff' : '#777'}
          placeholder="Password:" />
      </View>

      <TouchableOpacity style={[styles.smallButton,
      {backgroundColor: darkMode ? '#fff' : '#111'}]} onPress={addItem}>
        <Text style={[styles.buttonText,{color: darkMode ? '#111' : '#fff'}]}>Add Team member</Text>
      </TouchableOpacity>

      {continueCode}
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
  feedback:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginTop:-30,
    marginBottom: 10,
    color:'#950000',
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
    alignSelf: 'center',
    width: "100%",
    bottom: 70,
    position:"absolute",
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