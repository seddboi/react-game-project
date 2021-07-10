import React, {useState} from "react";
import Axios from "axios";
import './style.css';

export default function Login(){
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const [loginStatus, setLoginStatus] = useState("");

const login = () => {
    Axios.post("http://localhost:3001/api/users/login", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message);
      } else {
        setLoginStatus(response.data[0].username);
      }
    });
  };

    return(
        <div className="login">
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Password..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}> Login </button>

        <h1>{loginStatus}</h1>
      </div>
    )
}

