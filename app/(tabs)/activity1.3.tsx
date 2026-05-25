
import Screen from '../../components/decorators/screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("Instructions:\n    1. Drop the toy without a parachute and record the fall (baseline test).\n    2. Build a parachute using provided materials.\n    3. Drop the toy from the same height and record the fall.\n    4. Review speed and landing accuracy results in the app.\n    5. Redesign and test up to three prototypes within 20 minutes.\n    6. Upload videos, results, and team reflections.")
    activity.setButtonLink('/activity1.oops')

    return (
        activity.getScreenCode()
    );
}