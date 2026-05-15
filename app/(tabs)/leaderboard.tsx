import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  function getScores() {
    let data = [
      {
        "teamName" : "Template Team 1",
        "score" : 10,
        "key":0
      },
      {
        "teamName" : "Template Team 2",
        "score" : 150,
        "key":1
      },
      {
        "teamName" : "Template Team 3",
        "score" : 100,
        "key":2
      },
      {
        "teamName" : "Template Team 4",
        "score" : 40,
        "key":3
      },
      {
        "teamName" : "Template Team 5",
        "score" : 79,
        "key":4
      },
      {
        "teamName" : "Template Team 6",
        "score" : 92,
        "key":5
      }
    ];
    return data;
  }
  function displayRankings() {
    let data = getScores();
    let myDisplay = [<View style={styles.leaderboardRow}>
                      <Text style={styles.leaderboardHeader}>Team Name</Text>
                      <Text style={styles.leaderboardHeader}>Score</Text>
                    </View>];
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
      myDisplay.push(<View style={styles.leaderboardRow}>
                      <Text style={styles.leaderboardItem}>{data[highestIdx].teamName}</Text>
                      <Text style={styles.leaderboardItem}>{highest}</Text>
                    </View>);
      data.splice(highestIdx,1);
    }
    return myDisplay;
  }
  return (
    <View style={styles.container}>

     <View style={styles.topIcons}>
      <Text style={styles.icon}>▮▮▮</Text>
      <TouchableOpacity onPress={() => router.push('/')}>
        <Text style={styles.icon}>⌂</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/settings')}>
        <Text style={styles.icon}>⚙</Text>
      </TouchableOpacity>
     </View>


      

      <Text style={styles.title}>STEMM LAB APP</Text>

      {displayRankings()}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 55,
    backgroundColor: '#fff',
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
    marginBottom: 40,
  },
  leaderboardItem: {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 6,
    width:'47%',
    marginTop: 5,
  },
  leaderboardHeader: {
    textAlign: 'center',
    backgroundColor: '#000',
    color: '#fff',
    padding: 10,
    borderRadius: 0,
    width:'50%',
    marginTop: 5,
  },
  leaderboardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 0,
    marginBottom: 5,
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