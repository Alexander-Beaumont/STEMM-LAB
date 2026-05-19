
import Screen from '../screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Polution")
    activity.setText("For this activity you must measure and compare sound levels in different classroom activities")
    activity.setButtonLink('/activity2.2')

    return (
        activity.getScreenCode()
    );
}