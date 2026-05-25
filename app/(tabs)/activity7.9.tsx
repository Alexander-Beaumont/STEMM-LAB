import Screen from '../../components/decorators/screen';
import Reflection from '../../components/decorators/reflection.js';
import firebase from 'firebase/compat/app';
import { doc } from "firebase/firestore"; 
import { updateDoc  } from "firebase/firestore";
  declare global {
    var activity6Reflection: String;
    var activity6Results: Object;
}

export default function Activity7() {
    let activity = new Screen();
    activity.setTitle("Breathing Pace Trainer")
    activity.removeContinue()
    let uploadCode
    const db = firebase.firestore();
    const teamRef = doc(db, 'Teams', team.trim());
    uploadCode = (reflection : string) => {updateDoc(teamRef, {
        "activity7Reflection": reflection,
    })};
    activity.addDecorator(new Reflection("activity7Reflection",uploadCode))

    return (
        activity.getScreenCode()
    );
}