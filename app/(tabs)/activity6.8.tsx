import Screen from '../../components/decorators/screen';
import Reflection from '../../components/decorators/reflection.js';
import firebase from 'firebase/compat/app';
import { doc } from "firebase/firestore"; 
import { updateDoc  } from "firebase/firestore";
  declare global {
    var activity6Reflection: String;
    var activity6Results: Object;
}

export default function Activity6() {
    let activity = new Screen();
    activity.setTitle("Reaction Board Challenge")
    activity.removeContinue()
    let uploadCode
    const db = firebase.firestore();
    const teamRef = doc(db, 'Teams', team.trim());
    uploadCode = (reflection : string) => {updateDoc(teamRef, {
        "activity6Reflection": reflection,
    })};
    activity.addDecorator(new Reflection("activity6Reflection",uploadCode))

    return (
        activity.getScreenCode()
    );
}