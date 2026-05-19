
import Screen from '../screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Polution")
    activity.setText("")
    activity.setButtonLink('/activity2.1')
    activity.addDecorator(new SoundDecorator())

    return (
        activity.getScreenCode()
    );
}