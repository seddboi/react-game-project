import {useState} from 'react';
import axios from 'axios';

function HealthTracker() {
    const [weapon, setWeapon] = useState('');
    const [health, setHealth] = useState('');

    await Axios.get("http://localhost:3001/char/load/3").then((response) => {
      console.log(response.json)
      // console.log("working")
      


})}