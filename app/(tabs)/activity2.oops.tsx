
import Screen from '../screen.js';
import ImageDecorator from '../image.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Polution")
    activity.setText("Predict which action created the loudest sound\n   - Record the results\n   - Were you right?\n   - Any surprises?\n   - Should we wear ear muffs in your classroom?")
    activity.setButtonLink('/activity2.4')
    const imgRef = require("@/assets/images/table1.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}