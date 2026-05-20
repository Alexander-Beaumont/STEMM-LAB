
import Screen from '../screen.js';
  

export default function Activity4() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.setText("Predict which fold design makes the phone move the least.\n   - Record the results\n   - Were you right?\n   - Any surprises?")
    activity.setButtonLink('/activity4.4')

    return (
        activity.getScreenCode()
    );
}