
import Player from '../player.js';
import Screen from '../screen.js';
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.setText("")
    activity.setButtonLink('/activity1.1')
    activity.addDecorator(new Player())

    return (
        activity.getScreenCode()
    );
}