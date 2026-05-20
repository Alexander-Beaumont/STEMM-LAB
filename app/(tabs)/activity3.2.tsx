
import Screen from '../screen.js';
  

export default function Activity3() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.setText("Equipment\n   - Paper and cardboard\n   - Scissors\n   - Mobile phone\n   - Sticky Tape\n   - STEMM Mobile App")
    activity.setButtonLink('/activity3.3')

    return (
        activity.getScreenCode()
    );
}