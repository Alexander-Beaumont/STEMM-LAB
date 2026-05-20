import Screen from '../screen.js';
import { SoundMeter } from '../sound_decorator.js';

export default function Activity25() {
  const activity = new Screen();

  activity.setTitle("Sound Pollution Hunter");

  activity.setText(
    "Use the phone microphone to measure environmental sound levels."
  );

  activity.setButtonLink('/activity2.1');

  activity.addDecorator({
    getCode() {
      return (
        <SoundMeter
          onSoundChange={(data) => {
            console.log('Approx dB:', data.approxDb);
            console.log('Sound Level:', data.soundLevel);
          }}
        />
      );
    },
  });

  return activity.getScreenCode();
}