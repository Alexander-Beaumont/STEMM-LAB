
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  declare global {
    var activity5Reflection: String;
    var activity5Results: Object;
}

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.removeContinue()
    activity.addDecorator(new Reflection(global.activity5Reflection))

    return (
        activity.getScreenCode()
    );
}