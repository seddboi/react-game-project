import React from "react";
import "./style.css";

function Menu() {
    return (
        <div id="menu">
            <h2>(Game Title)</h2>
            <div id="btns">
                <div id="topBtn">
                    <a href="/"><button id="newBtn" className="customBtn menuBtn">New Game</button></a>
                    <a href="/resume"><button id="resumeBtn" className="customBtn menuBtn">Resume Game</button></a>
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