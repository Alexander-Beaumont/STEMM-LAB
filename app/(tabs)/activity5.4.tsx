
import Screen from '../screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.setText("Write-up (on paper):\n\nWhich movement was the hardest to keep the vibration low?\n\nRecord the results\n\nWere you right?\n\nAny surprises?")
    activity.setButtonLink('/activity5.5')

    return (
        activity.getScreenCode()
    );
}