import Screen from '../../components/decorators/screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.setText("Equipment List\n   - Mobile Phone with Stemm Lab App\n   - Open space to move safely.")
    activity.setButtonLink('/activity5.3')

    return (
        activity.getScreenCode()
    );
}