
import { router } from 'expo-router';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import "../global.js";

export default class Screen {
    constructor(title, text, button1Link) {
        this.title = title;
        this.textContent = text;
        this.button1Link = button1Link;
        this.decorators = [];
    }
    addDecorator(decorator) {
        this.decorators.push(decorator);
    }
    getScreenCode() {
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
              <Text style={[styles.title,
                {color: darkMode ? '#fff' : '#111'}
              ]}>{this.text}</Text>
        
              <TouchableOpacity
                style={[styles.backButton,{backgroundColor: darkMode ? '#fff' : '#000',}]}
                onPress={() => router.back()}>
                <Text style={[styles.backButtonText,{color: darkMode ? '#000' : '#fff',}]}>Back</Text>
              </TouchableOpacity>
            </View>
          );
    }
    getStyles() {
        return StyleSheet.create({
                container: {
                    flex: 1,
                    paddingHorizontal: 28,
                    paddingTop: 55,
                },
                text: {
                    textAlign: 'left',
                    fontSize: 14,
                    fontWeight: '300',
                    marginBottom: 5,
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
                homeIndicator: {
                    width: 120,
                    height: 5,
                    borderRadius: 3,
                    alignSelf: 'center',
                    bottom:2,
                    position: 'absolute',
                },
            });
    }
}