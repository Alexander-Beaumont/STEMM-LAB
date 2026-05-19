
import Camera from '../camera.js';
import Screen from '../screen.js';
  

export default function Activity3() {
    let activity = new Camera();

    return (
        activity.getCode()
    );
}