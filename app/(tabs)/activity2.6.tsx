
import Screen from '../screen.js';
import { SoundMeter } from '../sound_decorator.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.removeContinue()
    activity.addDecorator({
    getCode() {
      return (
        <SoundMeter
          onSoundChange={() => {}}
        />
      );
    },
  });
    return (
        activity.getScreenCode()
    );
}