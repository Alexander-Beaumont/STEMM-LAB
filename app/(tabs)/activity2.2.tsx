
import Screen from '../../components/decorators/screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.setText("Equipment List\n   -	Mobile phone with STEMM Lab app")
    activity.setButtonLink('/activity2.3')

    return (
        activity.getScreenCode()
    );
}