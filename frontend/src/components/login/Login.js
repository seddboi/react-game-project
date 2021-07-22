import React, {useEffect, useState} from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import './style.css';

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [loginStatus, setLoginStatus] = useState("");
  const [valid, setValid] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  let history = useHistory();

  const login = async() => {
    await Axios.post("http://localhost:3001/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      console.log(response)
      // console.log("working")
      if(response.status === 200){
        history.push('/menu')
      }
    setValid(true)
    })
    .catch((err) => {
      setErrMessage(err.response.data.message);
      // setErrMessage(err.response)
      setValid(false)
    });
  };

  const validate = () => {
    if(!valid){
      return(
      <p id="invalidMessage">{errMessage}</p>
      )
    }
  }

  return(
    <div className="login">
      
      <div id="loginArea">
        <h1>Login</h1>
        {validate()}

        <input
          type="text"
          placeholder="Email"
          className="loginInput"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          placeholder="Password..."
          className="loginInput"
          onChange={(e) => {
            setPassword(e.target.value);
            // console.log(e.target.value)
          }}
        />

        <button className="loginBtn customBtn" onClick={login}> Login </button>

        <a className="signupLink" href="/signup"><p className="link">Sign Up</p></a>
      </div>

      {/* <h1>{loginStatus}</h1> */}
    </div>
  )
}
