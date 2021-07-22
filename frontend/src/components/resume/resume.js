import React from 'react';
import { useLocation } from "react-router-dom";
import "./style.css";

function Resume({ chars }) {
    const location = useLocation();
    // console.log(loggedIn)
    console.log(location.chars)
    return(
        <div id="resume">
            <div id="resumeArea">
                {location.chars.map((charInfo) => {
                    // console.log(charInfo)
                    return(
                    <div className="savedFiles">
                        <div className="fileInfo">
                            <div className="info">
                                <p className="infoFile">Save File 1</p>
                                <p className="infoFile" >Level: {charInfo.level}</p>
                            </div>
                            <div className="info">
                                <p className="infoFile">xp: {charInfo.xp}</p>
                                <p className="infoFile">health: {charInfo.health}</p>
                            </div>
                        </div>

                        <div className="fileBtn">
                            <button className="btnFile customBtn">Play</button>
                            <button id="delBtn" className="btnFile customBtn">Delete</button>
                        </div>
                    </div>
                    )
                })}
                {/* <div className="savedFiles">
                    <div className="fileInfo">
                        <p className="infoFile">Save File 1</p>
                        <p className="infoFile" >7-12-2021</p>
                        <p className="infoFile">2 hr 20 min</p>
                    </div>

                    <div className="fileBtn">
                        <button className="btnFile customBtn">Play</button>
                        <button id="delBtn" className="btnFile customBtn">Delete</button>
                    </div>
                </div>
                <div className="savedFiles">
                    <div className="fileInfo">
                        <p className="infoFile">Save File 1</p>
                        <p className="infoFile">7-12-2021</p>
                        <p className="infoFile">2 hr 20 min</p>
                    </div>
                    <div className="fileBtn">
                        <button className="btnFile customBtn">Play</button>
                        <button id="delBtn" className="btnFile customBtn">Delete</button>
                    </div>
                </div>
                <div className="savedFiles">
                    <div className="fileInfo">
                        <p className="infoFile">Save File 1</p>
                        <p className="infoFile">7-12-2021</p>
                        <p className="infoFile">2 hr 20 min</p>
                    </div>
                    <div className="fileBtn">
                        <button className="btnFile customBtn">Play</button>
                        <button id="delBtn" className="btnFile customBtn">Delete</button>
                    </div>
                </div>
                <div className="savedFiles">
                    <div className="fileInfo">
                        <p className="infoFile">Save File 1</p>
                        <p className="infoFile">7-12-2021</p>
                        <p className="infoFile">2 hr 20 min</p>
                    </div>
                    <div className="fileBtn">
                        <button className="btnFile customBtn">Play</button>
                        <button id="delBtn" className="btnFile customBtn">Delete</button>
                    </div>
                </div>
                <div className="savedFiles">
                    <div className="fileInfo">
                        <p className="infoFile">Save File 1</p>
                        <p className="infoFile">7-12-2021</p>
                        <p className="infoFile">2 hr 20 min</p>
                    </div>
                    <div className="fileBtn">
                        <button className="btnFile customBtn">Play</button>
                        <button id="delBtn" className="btnFile customBtn">Delete</button>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Resume;