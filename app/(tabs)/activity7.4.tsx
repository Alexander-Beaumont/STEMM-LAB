
import Screen from '../../components/decorators/screen.js';
  

export default function Activity7() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.setText("Write-up (on paper):\n\nPredict which fold design makes the phone move the least.\n\nRecord the results\n\nWere you right?\n\nAny surprises?")
    activity.setButtonLink('/activity7.5')

    return (
        activity.getScreenCode()
    );
}