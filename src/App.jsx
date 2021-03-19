import React, { Component, Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Films from "./components/film/Films";
import People from "./components/people/People";

import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <main>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/films" component={Films} />
            <Route path="/people" component={People} />
          </Switch>
          <Footer />
        </Fragment>
      </main>
    );
  }
}

export default App;
