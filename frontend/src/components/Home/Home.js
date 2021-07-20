import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import "./style.css";

import music from "./../../assets/music/2019-06-14_-_Warm_Light_-_David_Fesliyan.mp3";

function Home({ loggedIn }) {
    const testAudio = new Audio(music);
    const [character, setCharacter] = useState({
        name: "User",
        xp: 1000,
        level: 2,
        maxHealth: 100,
        currentHealth: 75,
        maxEnergy: 100,
        currentEnergy: 85,
        equipWeapon: "sword",
    })
    const [weapons, setWeapons] = useState([
        {
            name: "Posion Dagger",
            damage: "2",
            isPoision: "1",
            desc: "This weapon will apply the poison status effect dealing 2 points of damage every time the poisoned entity attacks.",
        },
        {
            name: "Flame Sword",
            damage: "4",
            isFire: "1",
            desc: "This weapon applies fire status effect dealing 2 points of damage every time the burnt entity attacks."
        }
    ])
    const [currentWeapon, setCurrenWeapon] = useState(weapons[0]);
    // console.log(currentWeapon)
    const [playingMusic, setPlayingMusic] = useState(false);

    let history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login")
        .then(response => {
            // console.log(response)
            if(!response.data.loggedIn){
                history.push('/login');
            }
        })
    }, [])

    const char ={
        xp: 1000,
        health: 120,
        level: 3
    }

    const saveGame = (arr) => {
        
    }

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
    // const charEnergyPer = (character.currentEnergy/character.maxEnergy)*100

    return(
        <div id="home">
            <div id="gameArea">
            </div>

            <div id="charInfo">
                <p id="charName">@{loggedIn}: {character.name}</p>
                <div id="health">
                    <p className="charStat">Health: </p> 
                    <div className="statBar">
                        <div className="statPercent" style={{width: `${charHealthPer}%`}}> </div>
                        <p className="percent">{charHealthPer}%</p>
                    </div>
                </div>

                {/* <div id="energy">
                    <p className="charStat">Energy:</p>
                    <div className="statBar">
                        <div className="statPercent" style={{width: `${charEnergyPer}%`}}></div>
                        <p className="percent">{charEnergyPer}%</p>
                    </div>
                </div> */}

                <div id="weapon">
                    <p id="charWeapon">Current weapon: </p>
                    <div id="weaponInfo">
                        <p>{currentWeapon.name}</p>
                        <p>Weapon damage: {currentWeapon.damage}</p>
                        <p>Description: {currentWeapon.desc}</p>
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

            <div id="playMusic">
                <button id="play" onClick={startMusic}>play</button>
                <button id="pause" onClick={stopMusic}>pause</button>
            </div>
        </div>
    )
}

export default Home;