
import ImageDecorator from '../../components/decorators/image.js';
import Screen from '../../components/decorators/screen';
  

export default function Activity6() {
    let activity = new Screen();
    activity.setTitle("Reaction Board Challenge")
    activity.setText("Diagram:")
    activity.setButtonLink('/activity6.5')
    const imgRef = require("@/assets/images/diagram6.png")
    activity.addDecorator(new ImageDecorator(imgRef))

    return (
        activity.getScreenCode()
    );
}