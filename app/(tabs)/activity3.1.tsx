
import Screen from '../../components/decorators/screen.js';
  

export default function Activity3() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.setText("For this activity you will test how air movement affects flexible materials.")
    activity.setButtonLink('/activity3.2')

    return (
        activity.getScreenCode()
    );
}