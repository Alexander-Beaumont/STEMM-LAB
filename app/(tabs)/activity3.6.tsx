
import Screen from '../screen.js';
import Reflection from '../reflection.js';
  
import firebase from 'firebase/compat/app';
import { doc } from "firebase/firestore"; 
import { updateDoc  } from "firebase/firestore";

export default function Activity2() {
    let activity = new Screen();
    activity.setTitle("Hand Fan Challenge")
    activity.removeContinue()
    let uploadCode
    const db = firebase.firestore();
    const teamRef = doc(db, 'Teams', team.trim());
    uploadCode = (reflection : string) => {updateDoc(teamRef, {
        "activity3Reflection": reflection,
    })};
    activity.addDecorator(new Reflection("activity3Reflection",uploadCode))

    return (
        activity.getScreenCode()
    );
}