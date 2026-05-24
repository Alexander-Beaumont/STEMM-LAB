
import Screen from '../screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.setText("Instructions:\n   1. Measure noise from different actions (dropping objects (pens, books) talking, walking, stamping your feet).\n   2. Record sound levels and locations.\n   3. Map loud and quiet zones. ")
    activity.setButtonLink('/activity2.oops')

    return (
        activity.getScreenCode()
    );
}