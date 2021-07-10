import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/Home/Home';

function App() {
    const [backgroundAudio, setBackgroundAudio] = useState({
        song: "",
        playing: false,
    })

    function loginUser() {
        // for now console out username and password
        const username = document.getElementsByClassName("username").textcontent;
        const password = document.getElementsByClassName("password").textcontent;
        console.log(username, password);
    }

    return (
        <BrowserRouter>
            <div>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login loginUser={loginUser}/>
                </Route>
                <Route exact path="/">
                    <Home backgroundAudio={backgroundAudio} setBackgroundAudio={setBackgroundAudio}/>
                </Route>
            </div>
        </BrowserRouter>
    )
}

export default App;