
import ImageDecorator from '../../components/decorators/image.js';
import Screen from '../../components/decorators/screen.js';
  

export default function Activity3() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity3.5')
    const imgRef = require("@/assets/images/diagram3.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}