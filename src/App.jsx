import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Products from "./components/Products";
import Dashboard from "./components/Dashboard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        "Banana",
        "Apple",
        "Kiwi",
        "Blueberries",
        "Kale",
        "Almond Butter",
      ],
      posts: [
        {
          id: 1,
          title: "The Cow Jumped onto the Moon",
          content:
            "Quite a bizarre turn of events on the night, but I daresay...",
        },
        {
          id: 2,
          title: "How to Catch a Lizard",
          content:
            "Pinch your fingers together like tweezers, squat low like a lion, and...",
        },
      ],
    };
  }

  render() {
    return (
      <main>
        <Navbar />
        <Switch>
          <Route
            path="/products"
            render={() => <Products items={this.state.items} />}
          />
          <Route
            path="/posts"
            render={(props) => <Posts posts={this.state.posts} {...props} />}
          />
          <Route path="/admin" component={Dashboard} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    );
  }
}

export default App;
