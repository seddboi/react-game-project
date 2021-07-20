import React from "react";
import "./style.css";

function Settings() {
    return(
        <div id="settings">
            <div  id="settingArea">
                <div className="mas" id="masVol">
                    <label for="vol">Music: </label>
                    <input className="slider" type="range" name="vol"></input>
                </div>

                <div className="mas" id="masSound">
                    <label for="sound">Game Sound: </label>
                    <input className="slider" type="range" name="sound"></input>
                </div>
                
                <div className="mas" id="masMute">
                    <label for="mute">Mute All: </label>
                    <input className="mute customBtn" type="button" name="mute" value="Mute" />
                </div>
            </div>
        </div>
    )
}

export default Settings;