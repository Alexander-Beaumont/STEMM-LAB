
import ImageDecorator from '../../components/decorators/image.js';
import Screen from '../../components/decorators/screen.js';
  

export default function Activity4() {
    let activity = new Screen();
    activity.setTitle("Earthquake Resistant Structure")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity4.5')
    const imgRef = require("@/assets/images/diagram4.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}