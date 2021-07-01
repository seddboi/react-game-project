import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import Signup from './components/signup/Signup';
import Login from './components/login/Login';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </div>
        </BrowserRouter>
    )
}

export default App;