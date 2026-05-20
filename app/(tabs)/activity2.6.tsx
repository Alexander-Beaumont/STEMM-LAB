
import Screen from '../screen.js';
import { SoundMeter } from '../sound_decorator.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.addDecorator({
    getCode() {
      return (
        <SoundMeter
          onSoundChange={(data: { approxDb: number; soundLevel: string }) => {
            console.log('Approx dB:', data.approxDb);
            console.log('Sound Level:', data.soundLevel);
          }}
        />
      );
    },
  });
    return (
        activity.getScreenCode()
    );
}