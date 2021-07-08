import React, { useState, useEffect } from 'react';
import "./style.css";

import music from "./../../assets/music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3";

function Home() {
    const [backgroundAudio, setBackgroundAudio] = useState({
        play: false,
        pause: true,
    })

    const testAudio = new Audio(music);

    // useEffect(() => {
    //     setBackgroundAudio({
    //         play: true,
    //         pause: false,
    //     })
    //     console.log("playing")
    //     testAudio.play();

    // }, [])

    const startMusic = () => {
        setBackgroundAudio({
            play: true,
            pause: false,
        })
        console.log("playing")
        testAudio.play();
    }

    const stopMusic = () => {
        setBackgroundAudio({
            play: false,
            pause: true,
        })
        console.log("stoping")
        testAudio.pause();
    }

    return(
        <div id="home">
            <div id="gameArea">
            </div>
            <div id="gameInfo">
                <h3>Game Controls</h3>
                <p>Movement: Arrow keys</p>
                <p>Attack: A key</p>
                <p>Inventory: I key</p>
                <p>Pause: esc or p key</p>
            </div>
            <div id="playMusic">
                <button id="play" onClick={startMusic}>play</button>
                <button id="pause" onClick={stopMusic}>pause</button>
            </div>
        </div>
    )
}

export default Home;