import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { useHistory } from "react-router-dom";
import { useUser } from "../../gameContext";

function Menu(){//{ loggedIn, character, weapons, currentHealth, setCurrentHealth }) {
    const [character, setCharacter] = useState()
    const [weapons, setWeapons] = useState()
    const [currentHealth, setCurrentHealth] = useState();

    const [charInfo, setCharInfo] = useState([]);

    const mainUser = useUser();

    let history = useHistory();
    // let userData = `http://localhost:3001/api/char/load/${mainUser.id}`
    // console.log(userData)
    // console.log(mainUser)

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login")
        .then(response => {
            if(!response.data.loggedIn){
                history.push('/login');
            }
        })

        axios.get(`http://localhost:3001/api/char/load/1`)
        .then((response) => {
            setCharacter(response.data)
            setWeapons(response.data.weapon)
            setCurrentHealth(response.data.health)
        })
    }, [])

    const goHome = () => {
        axios.post("http://localhost:3001/api/char/newchar", {user_id: mainUser.id})
        .then((response) => {
            console.log(response)
        })

        history.push({
            pathname: '/',
            character: character,
            weapons: weapons,
            currentHealth: currentHealth
        })
    }

    const goResume = () => {
        let chars = [];
        axios.get(`http://localhost:3001/api/char/user/1`)
        .then((response) => {
            // console.log(response)
            response.data.map((char) => {
                console.log(char)
                chars.push({
                    level: char.level,
                    xp: char.xp,
                    health: char.health,
                    weaponId: char.weapon_id
                })
            })
            console.log(chars)
            // console.log(response.data[0].level)
            // setCharInfo({
            //     level: response.data[0].level,
            //     xp: response.data[0].xp,
            //     health: response.data[0].health,
            //     weaponId: response.data[0].weapon_id,
            // })
            
        })

        // console.log(charInfo)
        history.push({
            pathname: '/resume',
            chars: chars,
        })
    }

    return (
        <div id="menu">
            <h2>(Game Title)</h2>
            <div id="btns">
                <div id="topBtn">
                    {/* <a href="/"> */}
                        <button  onClick={goHome} id="newBtn" className="customBtn menuBtn">New Game</button>
                        {/* </a> */}
                    {/* <a href="/resume"> */}
                        <button onClick={goResume} id="resumeBtn" className="customBtn menuBtn">Resume Game</button>
                        {/* </a> */}
                </div>
                <div id="bottomBtn">
                    <a href="/settings"><button id="setBtn" className="customBtn menuBtn">Settings</button></a>
                    <a href="#"><button id="creditBtn" className="customBtn menuBtn">Credit</button></a>
                </div>
            </div>
        </div> 
    )
}

export default Menu;