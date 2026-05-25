
import Screen from '../screen.js';
  

export default function Activity6() {
    let activity = new Screen();
    activity.setTitle("Reaction Board Challenge")
    activity.setText("Students measure reaction time, coordination, and improvement through repeated digital and physical challenges.")
    activity.setButtonLink('/activity6.2')

    return (
        activity.getScreenCode()
    );
}