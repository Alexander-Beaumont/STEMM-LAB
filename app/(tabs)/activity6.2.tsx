
import Screen from '../../components/decorators/screen';
  

export default function Activity6() {
    let activity = new Screen();
    activity.setTitle("Reaction Board Challenge")
    activity.setText("Equipment List\n   - Mobile phone with STEMM Lab app \n   - Clear working space")
    activity.setButtonLink('/activity6.3')

    return (
        activity.getScreenCode()
    );
}