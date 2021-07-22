import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const loggedInContext = React.createContext();
const userContext = React.createContext();

export function useUser() {
    return useContext(userContext)
}

export default function GameProvider({ children }) {
    const [loggedIn, setLoggedIn] = useState(false);
    const [user, setUser] = useState();
    
    useEffect(() => {
        axios.get("http://localhost:3001/api/users/login").then((response) => {
            // console.log(response.data.user.email)
            if(response.data.loggedIn === true){
                setLoggedIn(response.data.user.username)
                setUser(response.data.user)
            }
        })
    },[])

    return (
        <loggedInContext.Provider value={loggedIn}>
            <userContext.Provider value={user}>
                {children}
            </userContext.Provider>
        </loggedInContext.Provider>
    )
}