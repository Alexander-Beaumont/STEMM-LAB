
import Screen from '../../components/decorators/screen.js';
  

export default function Activity3() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.setText("Write-up (on paper):\n   - Predict which fan design makes the paper move the most.\n   - Record the results\n   - Were you right?\n   - Any surprises?\n   - How does material stiffness affect the bend angle?\n   - How does fan design influence air velocity and resulting paper movement?\n   - How does distance from the fan affect bending?")
    activity.setButtonLink('/activity3.4')

    return (
        activity.getScreenCode()
    );
}