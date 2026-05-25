
import Screen from '../../components/decorators/screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("Equipment List\n   - Mobile Phone with Stemm Lab App\n   - Small toy (e.g. army toy soldier\n   - Table or elevated surface\n   - Paper or plastic\n   - String\n   - Scissors\n   - Tape")
    activity.setButtonLink('/activity1.3')

    return (
        activity.getScreenCode()
    );
}