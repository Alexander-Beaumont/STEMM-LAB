
import Screen from '../screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.setText("Instructions:\n    1. Hold the phone firmly in one hand. Activate the App vibration sensor.\n    2. Perform guided movement slowly as shown in the app. Record the vibration.\n    3. Repeat the activity with vibration feedback enabled.\n    4. Review speed, smoothness, and range-of-motion data.\n    5. Upload results and reflect as a group.")
    activity.setButtonLink('/activity5.4')

    return (
        activity.getScreenCode()
    );
}