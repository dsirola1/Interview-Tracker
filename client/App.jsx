import React, { Component } from "react";
import './component/style.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './component/Dashboard'
import Preferences from './component/Preferences'
//import Login from './component/login'


const App = () => {
   {
    return (
      <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    );
  }
}

export default function Login() {
  return(
    <div className="login-wrapper">
      <h1>Please Log In</h1>
      <form>
        <label>
          <p>First name</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}



export default App;
