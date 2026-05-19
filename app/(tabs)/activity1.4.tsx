
import ImageDecorator from '../image.js';
import Screen from '../screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity1.5')
    const imgRef = require("@/assets/images/diagram1.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}