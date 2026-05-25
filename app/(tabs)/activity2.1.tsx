
import Screen from '../../components/decorators/screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.setText("For this activity you will measure and compare sound levels in different classroom activities")
    activity.setButtonLink('/activity2.2')

    return (
        activity.getScreenCode()
    );
}