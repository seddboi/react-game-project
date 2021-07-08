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
                <h2 id="title">Sign Up</h2>

                <form id="signUpForm">
                    <div id="signupUsername">
                        <label id="label">Username: </label>
                        <input type="text" id="username"></input>
                    </div>

                    <div id="signupPassword">
                        <label id="label">Password: </label>
                        <input type="text" id="username"></input>
                    </div>

                    <div id="signupLinkBtn">
                        <p id="link"><a href="/login">Login</a></p>
                        <button onClick={getUserPass} id="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup;