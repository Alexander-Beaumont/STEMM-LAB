
import { router } from 'expo-router';
import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class Screen {
    constructor() {
        this.title = "";
        this.textContent = "";
        this.buttonLink = "/";
        this.decorators = [];
        this.hasContinue = true;
    }
    setTitle(title) {
        this.title = title;
    }
    setText(text) {
        this.textContent = text;
    }
    removeContinue() {
        this.hasContinue = false;
    }
    setButtonLink(buttonLink) {
        this.buttonLink = buttonLink;
    }
    addDecorator(decorator) {
        this.decorators.push(decorator);
    }
    getScreenCode() {
    const [darkMode, setDarkMode] = useState(false);
    if (darkMode!=global.darkmodeEnabled) {
        setDarkMode(global.darkmodeEnabled);
    }
    const styles = StyleSheet.create({
            container: {
                flex: 1,
                paddingHorizontal: 28,
                paddingTop: 55,
            },
            text: {
                textAlign: 'left',
                fontSize: 16,
                fontWeight: '400',
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
            continueButton: {
                backgroundColor: '#000',
                paddingVertical: 14,
                width: "100%",
                borderRadius: 6,
                bottom: 130,
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
            optionButton:{
                paddingVertical: 14,
                borderRadius: 6,
                marginTop: 10,
            },
            buttonText: {
                textAlign: 'center',
                fontWeight: '600',
            },
        });
        let compiledDecorators = [];
        let continueCode;
        if (this.hasContinue) {
            continueCode = (<TouchableOpacity
                style={[styles.continueButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
                onPress={() => router.push(this.buttonLink)}>
                <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Continue</Text>
              </TouchableOpacity>)
        }
        let textCode;
        if (this.textContent!="") {
            textCode = (<Text style={[styles.text,
                {color: darkMode ? '#fff' : '#111'}
              ]}>{this.textContent}</Text>)
        }
        for (let i=0;i<this.decorators.length;i++) {
            compiledDecorators.push(React.cloneElement(this.decorators[i].getCode(), { key:compiledDecorators.length}));
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
              ]}>{this.title}</Text>
              {textCode}

              {compiledDecorators}


              {continueCode}
              <TouchableOpacity
                style={[styles.backButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
                onPress={() => router.back()}>
                <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Back</Text>
              </TouchableOpacity>
            </View>
            
          );
    }
}