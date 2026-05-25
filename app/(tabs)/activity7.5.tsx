
import ImageDecorator from '../../components/decorators/image.js';
import Screen from '../../components/decorators/screen.js';
  

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity7.6')
    const imgRef = require("@/assets/images/diagram7.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}