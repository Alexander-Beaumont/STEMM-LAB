
import Screen from '../screen.js';
import Reflection from '../reflection.js';
import firebase from 'firebase/compat/app';
import { doc } from "firebase/firestore"; 
import { updateDoc  } from "firebase/firestore";
  declare global {
    var activity5Reflection: String;
    var activity5Results: Object;
}

export default function Activity5() {
    let activity = new Screen();
    activity.setTitle("Human Performance Lab")
    activity.removeContinue()
    let uploadCode
    const db = firebase.firestore();
    const teamRef = doc(db, 'Teams', team.trim());
    uploadCode = (reflection : string) => {updateDoc(teamRef, {
        "activity5Reflection": reflection,
    })};
    activity.addDecorator(new Reflection("activity5Reflection",uploadCode))

    return (
        activity.getScreenCode()
    );
}