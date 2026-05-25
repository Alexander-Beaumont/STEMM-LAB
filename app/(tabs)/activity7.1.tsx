
import Screen from '../../components/decorators/screen.js';
  

export default function Activity7() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.setText("Students analyse breathing patterns at rest and after exercise.")
    activity.setButtonLink('/activity7.2')

    return (
        activity.getScreenCode()
    );
}