
import Screen from '../screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("Predict which parachute design is the best.\n   - Sketch each of the designs\n   - Record the times of the design\n   - Were you correct in timings?\n   - What design was the easiest to make?")
    activity.setButtonLink('/activity1.4')

    return (
        activity.getScreenCode()
    );
}