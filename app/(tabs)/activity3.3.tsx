
import Screen from '../../components/decorators/screen.js';
  

export default function Activity3() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.setText("Instructions:\n   1. Stand paper upright on a table.\n   2. Fan air from 30cm away.\n   3. Observe and record movement.\n   4. Repeat with different fan designs and fan distance.\n   4. Repeat with a cardboard instead of a paper vertical")
    activity.setButtonLink('/activity3.oops')

    return (
        activity.getScreenCode()
    );
}