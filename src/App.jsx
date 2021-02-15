import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Users from "./components/users";
import Admin from "./components/admin";
import Home from "./components/home";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/users">
          <Users title="Users Rule" />
        </Route>
        <Route path="/admin">
          <Admin title="Admin Only" />
        </Route>
        <Route exact path="/">
          <Home title="Welcome!" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
