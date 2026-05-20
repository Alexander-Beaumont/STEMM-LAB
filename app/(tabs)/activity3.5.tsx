import { router } from 'expo-router';
import { Checkbox } from 'expo-checkbox';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import "../global.js";
declare global {
    var activity3Data: Object;
    var activity3Reflection: string;
}


export default function Activity1() {
  
  const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
  let currentActivity = global.activity3Data as any;
  const [material1, setMaterial1] = useState(currentActivity.material1);
  const [material2, setMaterial2] = useState(currentActivity.material2);
  const [material3, setMaterial3] = useState(currentActivity.material3);
  const [material4, setMaterial4] = useState(currentActivity.material4);
  const [bend1, setBend1] = useState(currentActivity.bend1);
  const [bend2, setBend2] = useState(currentActivity.bend2);
  const [bend3, setBend3] = useState(currentActivity.bend3);
  const [bend4, setBend4] = useState(currentActivity.bend4);
  const [isChecked1, setChecked1] = useState(currentActivity.checkbox1);
  const [isChecked2, setChecked2] = useState(currentActivity.checkbox2);
  const [isChecked3, setChecked3] = useState(currentActivity.checkbox3);
  const [isChecked4, setChecked4] = useState(currentActivity.checkbox4);

  function inputData(page: number) {
    currentActivity.material1 = material1;
    currentActivity.material2 = material2;
    currentActivity.material3 = material3;
    currentActivity.material3 = material4;
    currentActivity.bend1 = bend1;
    currentActivity.bend2 = bend2;
    currentActivity.bend3 = bend3;
    currentActivity.bend4 = bend4;
    currentActivity.checkbox1 = isChecked1;
    currentActivity.checkbox2 = isChecked2;
    currentActivity.checkbox3 = isChecked3;
    currentActivity.checkbox4 = isChecked4;
    if (page==1) {
        router.push("/activity3.6")
    }
    else {
        router.back()
    }
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
        ]}>Hand Fan Challenge</Text>
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
        <View style={[styles.table,{backgroundColor: darkMode ? '#333' : '#ddd',}]}>
            <View style={styles.boxAround}>
                <View style={styles.headerText}>
                    <Text style={[styles.backButtonText,{color: darkMode ? '#fff' : '#000',}]}>Material</Text>
                </View>
                <View style={styles.headerText}>
                    <Text style={[styles.backButtonText,{color: darkMode ? '#fff' : '#000',}]}>Bend</Text>
                </View>
                <View style={styles.headerText}>
                    <Text style={[styles.backButtonText,{color: darkMode ? '#fff' : '#000',}]}>Matches Hypothesis?</Text>
                </View>
            </View>
        <View style={styles.boxAround}>
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Material" value={material1} onChangeText={(e) => setMaterial1(e)} />
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Bend" value={bend1} onChangeText={(e) => setBend1(e)} />
                    <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        </View>
        <View style={styles.boxAround}>
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Material" value={material2} onChangeText={(e) => setMaterial2(e)} />
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Bend" value={bend2} onChangeText={(e) => setBend2(e)} />
                    <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        </View>
        <View style={styles.boxAround}>
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Material" value={material3} onChangeText={(e) => setMaterial3(e)} />
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Bend" value={bend3} onChangeText={(e) => setBend3(e)} />
                    <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
        </View>
        <View style={styles.boxAround}>
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Material" value={material4} onChangeText={(e) => setMaterial4(e)} />
            <TextInput style={[styles.input,
                    {backgroundColor: darkMode ? '#bbb' : '#666',
                    color: darkMode ? '#444' : '#fff',}
                    ]}
                    placeholderTextColor={darkMode ? '#444' : '#ddd'}
                    placeholder="Bend" value={bend4} onChangeText={(e) => setBend4(e)} />
            <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
        </View>
      </View>
        <TouchableOpacity
            style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
            onPress={() => inputData(1)}>
            <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Submit</Text>
        </TouchableOpacity>
        <TouchableOpacity
            style={[styles.backButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
            onPress={() => inputData(0)}>
            <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Back</Text>
        </TouchableOpacity>
  
    </View>
  );
}


  const styles = StyleSheet.create({
  checkbox:{
    marginVertical:'auto',
    marginHorizontal:"12%",
  },
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
  headerText: {
    marginTop: 5,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '400',
    width:"30%",
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
  table:{
    backgroundColor: '#333',
    borderRadius: 8,
  },
  form: {
    gap: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width:"30%",
  },
  smallButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    borderRadius: 6,
    width:"35%",
    marginVertical: 5,
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