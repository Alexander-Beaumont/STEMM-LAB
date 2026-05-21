
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.removeContinue()
    activity.addDecorator(new Reflection(global.activity1Reflection))

    return (
        activity.getScreenCode()
    );
}