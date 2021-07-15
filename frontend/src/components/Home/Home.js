import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./style.css";

import music from "./../../assets/music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3";

function Home() {
    const testAudio = new Audio(music);
    const [character, setCharacter] = useState({
        name: "User",
        maxHealth: 100,
        currentHealth: 79,
        maxEnergy: 100,
        currentEnergy: 85,
        equipWeapon: "sword",
    })

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login")
        .then(response => {
            console.log(response)
        })
    }, [])

    const startMusic = () => {
        testAudio.play();
    }

    const stopMusic = () => {
        testAudio.pause();
        console.log("paused")
    }

    // const checkMusic = async () => {
    //     if (!backgroundAudio.playing){
    //         startMusic();
    //         console.log("playing music")
    //     } else {
    //         stopMusic();
    //         console.log("pausing music.")
    //     }
    // }

    // let playPause;
    // if(backgroundAudio.playing){
    //     playPause = <button id="stopMusic" onClick={checkMusic}>pause</button>
    // } else{
    //     playPause = <button id="stopMusic" onClick={checkMusic}>play</button>
    // }

    const charHealthPer = (character.currentHealth/character.maxHealth)*100
    const charEnergyPer = (character.currentEnergy/character.maxEnergy)*100

    return(
        <div id="home">
            <div id="gameArea">
            </div>

            <div id="charInfo">
                <p id="charName">{character.name}</p>

                <div id="health">
                    <p className="charStat">Health: </p> 
                    <div className="statBar">
                        <div className="statPercent" style={{width: `${charHealthPer}%`}}> </div>
                        <p className="percent">{charHealthPer}%</p>
                    </div>
                </div>

                <div id="energy">
                    <p className="charStat">Energy:</p>
                    <div className="statBar">
                        <div className="statPercent" style={{width: `${charEnergyPer}%`}}></div>
                        <p className="percent">{charEnergyPer}%</p>
                    </div>
                </div>
                <p id="charWeapon">Current weapon: {character.equipWeapon}</p>
            </div>

            <div id="gameInfo">
                <h3>Game Controls</h3>
                
                {/* <audio autoPlay preload="auto" src={music}></audio> */}
                {/* {playPause} */}
                <p>Movement: Arrow keys</p>
                <p>Attack: A key</p>
                <p>Inventory: I key</p>
                <p>Pause: esc or p key</p>
            </div>
            {/* <div id="playMusic">
                <button id="play" onClick={startMusic}>play</button>
                <button id="pause" onClick={stopMusic}>pause</button>
            </div> */}
        </div>
    )
}

export default Home;