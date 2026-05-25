import { useState } from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import Decorator from './decorator';

export default class Reflection extends Decorator {
    constructor(dataStorage, uploadCode) {
        super()
        this.reflection = dataStorage;
        this.uploadCode = (e) => {uploadCode(e)};
    }
    getCode(){ 
        const [darkMode, setDarkMode] = useState(global.darkmodeEnabled);
        const [reflection, setReflection] = useState(global[this.reflection]);
        const upload = (e) => {this.uploadCode(e)}
        let updateReflection = (e) => {
            setReflection(e);
            global[this.reflection] = e;
            upload(e)
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