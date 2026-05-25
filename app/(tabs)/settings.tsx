
import { router } from 'expo-router';
import { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import "../../components/decorators/global.js";

declare global {
    var darkmodeEnabled: boolean;
}

export default function SettingsScreen() {
  
  const [darkMode, setDarkMode] = useState(false);
  if (darkMode!=global.darkmodeEnabled) {
    setDarkMode(global.darkmodeEnabled);
  }
  function changeDarkMode() {
    setDarkMode(!darkMode)
    global.darkmodeEnabled = !darkMode
  }

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? '#111' : '#fff',
        },
      ]}
    >
      <View style={styles.topIcons}>
        <TouchableOpacity onPress={() => router.push('/leaderboard')}>
          <Text style={[styles.icon,{color: darkMode ? '#fff' : '#111'}]}>▮▮▮</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/' as any)}>
          <Text
            style={[
              styles.icon,
              { color: darkMode ? '#fff' : '#000' },
            ]}
          >
            ⌂
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.icon,
            { color: darkMode ? '#fff' : '#000' },
          ]}
        >
          ⚙
        </Text>
      </View>

      <Text
        style={[
          styles.title,
          { color: darkMode ? '#fff' : '#000' },
        ]}
      >
        STEMM LAB APP
      </Text>

      <View style={styles.settingRow}>
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={() => changeDarkMode}
        >
          <Text style={styles.buttonText}>
            Toggle Dark Mode
          </Text>
        </TouchableOpacity>

        <Switch
          value={darkMode}
          onValueChange={changeDarkMode}
        />
      </View>

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
    marginBottom: 120,
  },

  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 320,
  },

  toggleButton: {
    backgroundColor: '#999',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 6,
  },

  buttonText: {
    color: '#000',
    fontWeight: '500',
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

  homeIndicator: {
    width: 120,
    height: 5,
    borderRadius: 3,
    alignSelf: 'center',
    marginTop: 30,
  },
});