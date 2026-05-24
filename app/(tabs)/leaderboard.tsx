import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase/compat/app';
import { doc, setDoc } from "firebase/firestore"; 
import { collection, query, where, getDocs, updateDoc  } from "firebase/firestore";

export default function HomeScreen() {
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  const [hasRun, setHasRun] = useState(false);
  const [myPoints, setMyPoints] = useState(0);
  const [rankings, setRankings] = useState([<View key={0} />]);
  const db = firebase.firestore();
  async function getScores() {
    const teamsRef = collection(db, "Teams");

    const q = query(teamsRef);
    const querySnapshot = await getDocs(q)
    let data: { teamName: string; score: number }[] = [];
    querySnapshot.forEach((doc) => {
      let score = 0;
      if (doc.data().activity1Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity2Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity3Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity4Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity5Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity6Reflection.length>10) {
        score += 10;
      }
      if (doc.data().activity7Reflection.length>10) {
        score += 10;
      }
      for (let i in doc.data().activity1Data) {
        if (doc.data().activity1Data[i].accuracy!=null) {
          score += 1;
        }
        if (doc.data().activity1Data[i].height!=null) {
          score += 1;
        }
        if (doc.data().activity1Data[i].mass!=null) {
          score += 1;
        }
        if (doc.data().activity1Data[i].time!=null) {
          score += 1;
        }
        if (doc.data().activity1Data[i].video.length!=0) {
          score += 1;
        }
      }
      if (doc.data().activity3Data.material1!="") {
        score += 1;
      }
      if (doc.data().activity3Data.material2!="") {
        score += 1;
      }
      if (doc.data().activity3Data.material3!="") {
        score += 1;
      }
      if (doc.data().activity3Data.material4!="") {
        score += 1;
      }
      if (doc.data().activity3Data.bend1!="") {
        score += 1;
      }
      if (doc.data().activity3Data.bend2!="") {
        score += 1;
      }
      if (doc.data().activity3Data.bend3!="") {
        score += 1;
      }
      if (doc.data().activity3Data.bend4!="") {
        score += 1;
      }
      for (let i in doc.data().activity4Data) {
        if (doc.data().activity4Data[i].vibration!=null) {
          score += 3;
        }
        if (doc.data().activity4Data[i].outcome!=null) {
          score += 3;
        }
      }
      if (doc.data().activity5Results.movement1!="Not Started") {
        score += 2;
      }
      if (doc.data().activity5Results.movement2!="Not Started") {
        score += 3;
      }
      if (doc.data().activity5Results.movement3!="Not Started") {
        score += 4;
      }
      
      data.push({
        "teamName" : doc.data().team,
        "score" : score
      })
      if (doc.data().team == global.team) {
        setMyPoints(score)
      }
    });

    return data;
  }
  const displayRankings = async () => {
    let data = await getScores();
    let darkmodeCSS = {backgroundColor: darkMode ? '#fff' : '#111',
          color: darkMode ? '#111' : '#fff'}

    let myDisplay = [];
    myDisplay.push(<View style={[styles.headerRow,darkmodeCSS]} key={myDisplay.length}>
                      <Text style={[styles.leaderboardHeader]} key={myDisplay.length+"a"}>Team Name</Text>
                      <Text style={[styles.leaderboardHeader]} key={myDisplay.length+"b"}>Score</Text>
                    </View>)
    let dataLength = data.length;
    for (var i=0; i<dataLength&&i<5; i++) {
      let highest = 0;
      let highestIdx = 0;
      for (var j=0; j<data.length; j++) {
        if (data[j].score>highest) {
          highest = data[j].score;
          highestIdx = j;
        }
      }
      myDisplay.push(<View style={styles.leaderboardRow} key={myDisplay.length}>
                      <Text style={[styles.leaderboardItem,darkmodeCSS]} key={myDisplay.length+"a"}>{data[highestIdx].teamName}</Text>
                      <Text style={[styles.leaderboardItem,darkmodeCSS]} key={myDisplay.length+"b"}>{highest}</Text>
                    </View>);
      data.splice(highestIdx,1);
    }
    setRankings(myDisplay);
  }
  if(!hasRun) {
    displayRankings()
    setHasRun(true)
  }
  return (
    <View style={[styles.container,
      {
          backgroundColor: darkMode ? '#111' : '#fff',
      }]}>

     <View style={styles.topIcons}>
        <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>▮▮▮</Text>
                    
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
      {<Text style={[styles.buttonText,
        {color: darkMode ? '#fff' : '#111', marginBottom:20}
      ]}>Your Points: {myPoints}</Text>}
      {rankings}

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
    marginBottom: 30,
  },
  leaderboardItem: {
    textAlign: 'center',
    padding: 10,
    borderRadius: 6,
    width:'47%',
    marginTop: 5,
  },
  leaderboardHeader: {
    textAlign: 'center',
    padding: 10,
    width:'50%',
    borderRadius: 6,
    marginTop: 5,
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 0,
    marginBottom: 5,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 0,
    marginBottom: 5,
    borderRadius: 6,
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
    backgroundColor: '#222',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
    marginTop: 100,
  },
  continueButton: {
    backgroundColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 90,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  homeIndicator: {
    width: 120,
    height: 5,
    backgroundColor: '#000',
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 30,
  },
});