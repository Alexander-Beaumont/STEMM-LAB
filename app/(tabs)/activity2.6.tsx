
import Camera from '../camera.js';
import Screen from '../screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.setText("This page is just placeholder for until a sound sensor is programmed")

    return (
        activity.getScreenCode()
    );
}