
import { useState } from 'react';
import Screen from '../screen.js';
  

let activity1 = new Screen(
  "Parachute Drop", 
  "For this activity you must design, build, and test a parachute for a small toy to reduce its landing speed and impact force. Teams iterate their designs under time and material constraints, aiming to achieve the slowest and safest landing within a target area.",
   "/"
  );

export default function Activity1() {
    const [darkMode, setDarkMode] = useState(false);
    if (darkMode!=global.darkmodeEnabled) {
        setDarkMode(global.darkmodeEnabled);
    }
  return (
    activity1.getScreenCode()
  );
}

const styles = activity1.getStyles();