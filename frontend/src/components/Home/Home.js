import React, { useState, useEffect,  } from 'react';
import axios from 'axios';
import { useHistory, useLocation } from "react-router-dom";

import "./style.css";

import music from "./../../assets/music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3";
import CreateGame from '../CreateGame/CreateGame';

function Home({ loggedIn, character, weapons, currentHealth, setCurrentHealth }) {
    const testAudio = new Audio(music);
    const [playingMusic, setPlayingMusic] = useState(false);

    let history = useHistory();
    const location = useLocation();

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login")
        .then(response => {
            // console.log(response)
            if(!response.data.loggedIn){
                history.push('/login');
            }
        })
    }, [])

    const musicPlayer = () => {
        if(playingMusic){
            console.log("pause")
            setPlayingMusic(false)
            testAudio.pause();            
        } else {
            setPlayingMusic(true)
            console.log("play");
            testAudio.play();
        }
    }

    const startMusic = () => {
        testAudio.play();
        // setPlayingMusic(true)
    }

    // pause only works when it it by itself in a function
    const stopMusic = () => {
        testAudio.pause();
        // setPlayingMusic(false)
        console.log("paused")
    }

    const gotoMenu = () => {
        history.push('/menu')
    }

    const logUserOut = () => {
         axios.get("http://localhost:3001/api/users/logout")
        .then(response => {
            console.log(response)
            history.push('/login');
        })
    }

    const charHealthPer = (location.currentHealth/location.character.health)*100

    return(
        <div id="home">
            <div id="gameArea">   
                <CreateGame />
           
            </div>

            <div id="charInfo">
                <p id="charName">@{loggedIn}- level: {location.character.level}</p>
                <div id="health">
                    <p className="charStat">Health: </p> 
                    <div className="statBar">
                        <div className="statPercent" style={{width: `${charHealthPer}%`}}> </div>
                        <p className="percent">{charHealthPer}%</p>
                    </div>
                </div>

                <div id="weapon">
                    <p id="charWeapon">Current weapon: </p>
                    <div id="weaponInfo">
                        <p>{location.weapons.name}</p>
                        <p>Weapon damage: {location.weapons.damage}</p>
                        {location.weapons.isVampireic ? <p>Effect: Vampireic</p> : <p></p>}
                        {location.weapons.isParalysis ? <p>Effect: Paralysis</p> : <p></p>}
                        {location.weapons.isPoison ? <p>Effect: Poison</p> : <p></p>}
                        {location.weapons.desc !== null ? <p>Description: {location.weapons.desc}</p> : <p></p>}
                    </div>
                </div>
            </div>

            <div id="gameInfo">
                <div id="gameBtn">
                    <button onClick={logUserOut}>Logout</button>
                    <button onClick={gotoMenu}>Menu</button>
                </div>
                <h3>Game Controls</h3>
                
                {/* <audio muted={false} autoPlay="autoplay" preload="auto" src={music} controls> */}

                {/* </audio> */}
                {/* {playPause} */}
                <p>Movement: Arrow keys</p>
                <p>Attack: A key</p>
                <p>Inventory: I key</p>
                <p>Pause: esc or p key</p>
            </div>
            {/* <div>
                <button onClick={musicPlayer}>{playingMusic ? "pause" : "play"}</button>
            </div> */}

            {/* <div id="playMusic">
                <button id="play" onClick={startMusic}>play</button>
                <button id="pause" onClick={stopMusic}>pause</button>
            </div> */}
        </div>
    )
}

export default Home;