
import Screen from '../screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.setText("Students investigate how the human body moves by measuring speed, smoothness, and coordination during controlled stretching activities.")
    activity.setButtonLink('/activity5.2')

    return (
        activity.getScreenCode()
    );
}