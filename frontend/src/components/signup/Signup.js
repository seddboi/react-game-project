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
        <div className="signupArea">
            <h2 className="title">Sign Up</h2>
            <form className="signUpForm">
                <label className="label">Username: </label>
                <input type="text" className="username"></input>
                <label className="label">Password: </label>
                <input type="text" className="username"></input>
                <p className="link"><a href="/login">Login</a></p>
            </form>
            <button onClick={getUserPass} className="submit">Submit</button>
        </div>
    )
}

export default Signup;