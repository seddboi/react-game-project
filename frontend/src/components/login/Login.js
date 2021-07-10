import React from 'react';
import './style.css';

function Login({ loginUser }) {
    return(
        <div id="login">
            <div id="loginArea">
                <h2 id="title">Login</h2>

                <form id="loginForm">
                    <div id="loginUsername">
                        {/* <label id="label">Username: </label> */}
                        <input type="text" id="username" className="loginInput" placeholder="Enter Username"></input>
                    </div>

                    <div id="loginPassword">
                        {/* <label id="label">Password: </label> */}
                        <input type="text" id="password" className="loginInput" placeholder="Enter Password"></input>
                    </div>

                    <div id="linkSub">
                        <button id="loginBtn" onClick={() => loginUser()}>Login</button>
                        <p id="link">Save your game: <a href="/signup">Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;