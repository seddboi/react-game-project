import React from 'react';
import './style.css';

function Signup() {
    const getUserPass = (e) =>{ // get username text and password text "still needs work"
        e.preventDefault();
        const username = document.getElementsByClassName("username");
        const password = document.getElementsByClassName("password");

        console.log(`Username is ${username} and password is ${password}`)
    }

    return (
        <div id="signup">
            <div id="signupArea">
                <h2 id="signupTitle">Sign Up</h2>

                <form id="signUpForm">
                    <div id="signupUsername">
                        {/* <label id="label">Username: </label> */}
                        <input type="text" id="username" className="signupInput" placeholder="Enter Username"></input>
                    </div>

                    <div id="signupPassword">
                        {/* <label id="label">Password: </label> */}
                        <input type="text" id="username" className="signupInput" placeholder="Enter Password"></input>
                    </div>

                    <div id="signupEmail">
                        <input type="text" id="email" className="signupInput" placeholder="Enter Email"></input>
                    </div>

                    <div id="signupLinkBtn">
                        <button onClick={getUserPass} id="signupBtn">Sign Up</button>
                        <p className="link"><a href="/login">Login</a></p>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;