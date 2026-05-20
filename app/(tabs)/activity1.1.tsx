
import Screen from '../screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("For this activity you will design, build, and test a parachute for a small toy to reduce its landing speed and impact force. Teams iterate their designs under time and material constraints, aiming to achieve the slowest and safest landing within a target area.")
    activity.setButtonLink('/activity1.2')

    return (
        activity.getScreenCode()
    );
}