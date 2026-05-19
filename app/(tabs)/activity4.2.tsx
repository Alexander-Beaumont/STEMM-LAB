
import Screen from '../screen.js';
  

export default function Activity4() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.setText("Equipment:\n   - Paper and cardboard\n   - Scissors\n   - Mobile phone\n   - Sticky Tape\n   - STEMM Mobile App")
    activity.setButtonLink('/activity4.3')

    return (
        activity.getScreenCode()
    );
}