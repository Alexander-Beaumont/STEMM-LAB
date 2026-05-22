
import ImageDecorator from '../image.js';
import Screen from '../screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity5.6')
    const imgRef = require("@/assets/images/diagram5.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}