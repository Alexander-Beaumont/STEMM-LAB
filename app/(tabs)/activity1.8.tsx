
import Screen from '../screen.js';
import PlayerDecorator from '../player.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.removeContinue()
    let currentActivity = global.activity1Data[global.activity1DataIndex] as any;
    activity.addDecorator(new PlayerDecorator(currentActivity.video[0].uri))
    console.log(currentActivity.video)

    return (
        activity.getScreenCode()
    );
}