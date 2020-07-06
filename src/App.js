import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./user/login/signin";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./home/home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
