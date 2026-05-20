
import Screen from '../screen.js';
  

export default function Activity6() {
    let activity = new Screen();
    activity.setTitle("Reaction Board Challenge")
    activity.setText("Instructions:\n    1. Tap the screen as soon as the hidden button appears.\n    2. Record reaction time. Rotate through each team member.\n    Phase 2 - Swap Hands\n    3. Repeat using the non-dominant hand.\n    4. Rotate through each team member.\n    Phase 3 - Tracing Challenge\n    5. Trace a moving shape on the screen.\n    6. Review accuracy and delay.")
    activity.setButtonLink('/activity6.4')

    return (
        activity.getScreenCode()
    );
}