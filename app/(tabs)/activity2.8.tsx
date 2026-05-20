
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Polution")
    activity.removeContinue()
    activity.addDecorator(new Reflection(global.activity2Reflection))

    return (
        activity.getScreenCode()
    );
}