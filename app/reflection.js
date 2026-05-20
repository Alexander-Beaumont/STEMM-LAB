import { useVideoPlayer, VideoView } from 'expo-video';
import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Decorator from './decorator';

export default class Reflection extends Decorator {
    constructor(dataStorage) {
        super()
        this.reflection = dataStorage;
    }
    getCode(){ 
        const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
        const [reflection, setReflection] = useState(this.reflection);
        function updateReflection(e) {
            setReflection(e);
            global.activity1Reflection = e;
        }
        const styles = StyleSheet.create({
            contentContainer: {
                flex: 1,
                padding: 10,
            },
            input: {
                width: "100%",
                height: 450,
                textAlignVertical: 'top',

            },
            controlsContainer: {
                padding: 10,
            },
        });
        return (
            <View style={styles.contentContainer}>
              <TextInput style={[styles.input,
                {backgroundColor: darkMode ? '#444' : '#bbb',
                color: darkMode ? '#fff' : '#000',}
                ]}
                multiline
                placeholderTextColor={darkMode ? '#bbb' : '#444'}
                placeholder="Please write a short reflection on what you have learned" value={reflection} onChangeText={(e) => updateReflection(e)} />
            </View>
        )
    }; 
}