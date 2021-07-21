import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import "./style.css";

export default function Signup() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [emailReg, setEmailReg] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [valid, setValid] = useState(true)

  Axios.defaults.withCredentials = true;

  let history = useHistory();

  const register = async () => {
      await Axios.post("http://localhost:3001/api/users/register", {
      username: usernameReg,
      email: emailReg,
      password: passwordReg,
    }).then((response) => {
      if(response.status === 200){
        history.push('/login')
      }
      // console.log(response)
    }).catch(err => {
      setValid(false)
      // console.log(err)
    });
  };

  const validate = () => {
    if(!valid){
      return(
      <p id="invalidMessage">Invalid Email or Password</p>
      )
    }
  }

  useEffect(() => {
    Axios.get("http://localhost:3001/api/users/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    });
  }, []);

  return (
    <div className="register">
      <div className="signupArea">
        <h1>Registration</h1>
        {validate()}

        <input
          type="text"
          placeholder="Username"
          className="signupInput"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Email"
          className="signupInput"
          onChange={(e) => {
            setEmailReg(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Password"
          className="signupInput"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />

        <button className="signupBtn customBtn" onClick={register}> Register </button>
        <a className="loginLink" href="/login"><p className="link">Login</p></a>
      </div>

      <h1>{loginStatus}</h1>
    </div>
  );
}