import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './assets/css/body.css'
// import { createH, useBasename } from 'history';

import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Resume from './components/resume/resume';
import Settings from './components/Setting/Settings';
import Credits from './components/Credit/Credits';
import axios from 'axios';

function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState("");

    axios.defaults.withCredentials = true;
    // const history = useBasename(createHistory)({basename: '/'});
    // function loginUser() {
    //     // for now console out username and password
    //     const username = document.getElementsByClassName("username").textcontent;
    //     const password = document.getElementsByClassName("password").textcontent;
    //     console.log(username, password);
    // }

    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login").then((response) => {
            // console.log(response.data.user.email)
            if(response.data.loggedIn === true){
                setLoggedIn(response.data.user.username)
            }
        })
    },[])

    return (
        <Router> {/*history={history}>*/}
            <div>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/menu">
                    <Menu />
                </Route>
                <Route exact path="/resume">
                    <Resume />
                </Route>
                <Route exact path="/settings">
                    <Settings />
                </Route>
                <Route exact path="/credits">
                    <Credits />
                </Route>
                <Route exact path="/">
                    <Home loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>
                    {/* {loggedIn ? ( <Home loggedIn={loggedIn}/> ) : (<Redirect to="/login" />)} */}
                </Route>
            </div>
        </Router>
    )
}

export default App;