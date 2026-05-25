
import Screen from '../../components/decorators/screen.js';
import Reflection from '../../components/decorators/reflection.js';
import firebase from 'firebase/compat/app';
import { doc } from "firebase/firestore"; 
import { updateDoc  } from "firebase/firestore";
  

export default function Activity1() {
    let activity = new Screen();
    activity.setTitle("Parachute Drop")
    activity.removeContinue()
    let uploadCode
    const db = firebase.firestore();
    const teamRef = doc(db, 'Teams', team.trim());
    uploadCode = (reflection : string) => {updateDoc(teamRef, {
        "activity1Reflection": reflection,
    })};
    activity.addDecorator(new Reflection('activity1Reflection',uploadCode))

    return (
        activity.getScreenCode()
    );
}