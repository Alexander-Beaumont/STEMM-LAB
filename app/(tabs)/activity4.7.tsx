
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.removeContinue()
    activity.addDecorator(new Reflection(global.activity3Reflection))

    return (
        activity.getScreenCode()
    );
}