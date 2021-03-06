import React, { useState } from "react";
import "./components/Style/Style.css";
import Dashboard from "../client/components/Dashboard";
import Signup from "../client/components/Signup";
import Login from "../client/components/Login";
import useToken from "./useToken";
import { Route, Switch, Link, BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <h1>Application</h1>

        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/signup" component={Signup} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
