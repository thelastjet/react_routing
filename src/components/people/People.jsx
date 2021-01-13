import React, { Component } from "react";
import PeopleCards from "./PeopleCards";

class People extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peopleArr: [],
      hasData: false,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          peopleArr: data,
          hasData: true,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="my-3">Studio Ghibli Characters</h1>
        <PeopleCards arr={this.state.peopleArr} />
      </React.Fragment>
    );
  }
}

export default People;
