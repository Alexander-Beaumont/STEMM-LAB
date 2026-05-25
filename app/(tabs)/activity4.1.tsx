
import Screen from '../../components/decorators/screen.js';
  

export default function Activity4() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.setText("For this activity you will design structures that withstand vibration, simulating earthquakes.")
    activity.setButtonLink('/activity4.2')

    return (
        activity.getScreenCode()
    );
}