import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';
import { MovementMeter } from '../movement_meter';
import '../global.js'
function getActivity5Results() {
  return (global as any).activity5Results;
}
export default function Activity5Sensor() {

  const darkMode = global.darkmodeEnabled;
  const { movement, feedback } = useLocalSearchParams();

  const feedbackEnabled = feedback === 'true';
  
  return (
    <View style={[ styles.container,
    { backgroundColor: darkMode ? '#111' : '#fff' },]}
    >
      <Text style={[ styles.appTitle, { color: darkMode ? '#fff' : '#111' }, ]}
>
  STEMM LAB APP
</Text>

      <Text style={[ styles.title, { color: darkMode ? '#fff' : '#111' },]}
      >
  {movement}
</Text>

      <Text style={[ styles.description,
      { color: darkMode ? '#fff' : '#111' },
      ]}>
        Start measuring and perform the movement slowly. The app will classify
        your movement as Steady, Moderate, or Shaky.
      </Text>

      <MovementMeter
        hapticsEnabled={feedbackEnabled}
        onMovementChange={(data: any) => {
        if (!data.isFinal) return;

        if (movement === 'Movement 1') {
            getActivity5Results().movement1 = data.finalLevel;
        }

        if (movement === 'Movement 2') {
            getActivity5Results().movement2 = data.finalLevel;
        }

        if (movement === 'Movement 3') {
            getActivity5Results().movement3 = data.finalLevel;
        }
        }}
      />

      <TouchableOpacity style={[styles.backButton, { borderColor: darkMode ? '#fff' : '#000',},

      ]} onPress={() => router.back()}>
        <Text style={[ styles.backButtonText, { color: darkMode ? '#fff' : '#000' }, ]}
        >Back</Text>
      </TouchableOpacity>
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
  appTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 35,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 14,
    textAlign: 'center',
  },
  description: {
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 20,
  },
  backButton: {
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 14,
    borderRadius: 6,
    marginTop: 20,
  },
  backButtonText: {
    color: '#000',
    textAlign: 'center',
    fontWeight: '600',
  },
});