import React, { useState, useEffect } from 'react';
import "./style.css";

import music from "./../../assets/music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3";

function Home({backgroundAudio, setBackgroundAudio}) {
    const testAudio = new Audio(music);
    const [character, setCharacter] = useState({
        name: "User",
        maxHealth: 100,
        currentHealth: 90,
        maxEnergy: 100,
        currentEnergy: 85,
        equipWeapon: "sword",
    })

    useEffect(() => {
        checkMusic();
    }, [])

    const startMusic = () => {
        setBackgroundAudio({playing: true})
        testAudio.play();
    }

    const stopMusic = () => {
        setBackgroundAudio({playing: false})
        testAudio.pause();
        console.log("paused")
    }

    const checkMusic = async () => {
        if (!backgroundAudio.playing){
            startMusic();
            console.log("playing music")
        } else {
            stopMusic();
            console.log("pausing music.")
        }
    }

    let playPause;
    if(backgroundAudio.playing){
        playPause = <button id="stopMusic" onClick={checkMusic}>pause</button>
    } else{
        playPause = <button id="stopMusic" onClick={checkMusic}>play</button>
    }

    // const charHealthPer = (character.currentHealth/character.maxHealth)*100
    // const charEnergyPer = (character.currentEnergy/character.maxEnergy)*100

    return(
        <div id="home">
            <div id="gameArea">
            </div>

            <div id="charInfo">
                <p id="charName">{character.name}</p>
                <div id="health">
                    <p id="charHealth">Health: </p> 
                    {/* chang things so bar changes with health as it lowers */}
                    <div id="healthBar"><p id="healthPercent" >{(character.currentHealth/character.maxHealth)*100}% </p></div>
                </div>
                <p id="charEnergy">Energy: {(character.currentEnergy/character.maxEnergy)*100}%</p>
                <p id="charWeapon">Current weapon: {character.equipWeapon}</p>
            </div>

            <div id="gameInfo">
                <h3>Game Controls</h3>
                
                <audio autoPlay preload="auto" src={music}></audio>
                {playPause}
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