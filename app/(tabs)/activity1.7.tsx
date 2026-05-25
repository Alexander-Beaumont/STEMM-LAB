
import Camera from '../../components/decorators/camera.js';
import Screen from '../../components/decorators/screen.js';
  

export default function Activity1() {
    let activity = new Camera();
    let currentActivity = global.activity1Data[global.activity1DataIndex] as any;
    activity.setSaveVar(currentActivity.video)

    return (
        activity.getCode()
    );
}