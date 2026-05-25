
import Screen from '../../components/decorators/screen.js';
  

export default function Activity7() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.setText("Instructions:\n    1. Place the phone gently on the chest.\n    2. Record breathing at rest.\n    3. Perform light exercise.\n a. Jog one minute on the spot\n b. 100 star jump. \n 4. Record breathing again and compare results.\n   Rotate for each member")
    activity.setButtonLink('/activity7.4')

    return (
        activity.getScreenCode()
    );
}