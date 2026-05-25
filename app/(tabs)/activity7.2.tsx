import Screen from '../../components/decorators/screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.setText("Equipment List\n   - Mobile Phone with Stemm Lab App\n   - Flat surface or mat")
    activity.setButtonLink('/activity7.3')

    return (
        activity.getScreenCode()
    );
}