
import Camera from '../../components/decorators/camera.js';
import Screen from '../../components/decorators/screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Sound Pollution")
    activity.setText("This page is just placeholder for until a location map is programmed")

    return (
        activity.getScreenCode()
    );
}