
import ImageDecorator from '../image.js';
import Screen from '../screen.js';
  

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Sound Polution")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity2.5')
    const imgRef = require("@/assets/images/diagram2.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}