
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.removeContinue()
    activity.addDecorator(new Reflection(global.activity1Reflection))

    return (
        activity.getScreenCode()
    );
}