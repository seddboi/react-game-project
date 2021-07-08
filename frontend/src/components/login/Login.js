import React from 'react';
import './style.css';

function Login({ loginUser }) {
    return(
        <div id="login">
            <div id="loginArea">
                <h2 id="title">Login</h2>

                <form id="loginForm">
                    <div id="loginUsername">
                        <label id="label">Username: </label>
                        <input type="text" id="username"></input>
                    </div>

                    <div id="loginPassword">
                        <label id="label">Password: </label>
                        <input type="text" id="password"></input>
                    </div>

                    <div id="linkSub">
                        <p id="link"><a href="/signup">Sign Up</a></p>

                        <button id="submit" onClick={() => loginUser()}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;