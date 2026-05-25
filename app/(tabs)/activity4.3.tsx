
import Screen from '../../components/decorators/screen.js';
  

export default function Activity4() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.setText("Instructions\n   1. Build an anti-vibration layer, by folding paper/cardboard.\n   2. Place a flat cardboard platform on top.\n   3. Place the phone in the centre and activate vibration mode on the STEMM App.\n   4. Modify the structure to reduce movement (e.g. more pillars, more folds, etc)  ")
    activity.setButtonLink('/activity4.oops')

    return (
        activity.getScreenCode()
    );
}