import React from 'react';
import './style.css';

function Login() {
    return(
        <div className="loginArea">
            <h2 className="title">Login</h2>
            <form className="loginForm">
                <label className="label">Username: </label>
                <input type="text" className="username"></input>
                <label className="label">Password: </label>
                <input type="text" className="password"></input>
                <p className="link"><a href="/signup">Sign Up</a></p>
                <button className="submit">Submit</button>
            </form>
            
        </div>
    )
}

export default Login;