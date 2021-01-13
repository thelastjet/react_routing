import React, { Component } from "react";
import FilmCard from "./FilmCard";

class Films extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filmsArr: [],
      hasData: false,
    };
  }

  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          filmsArr: data,
          hasData: true,
        });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="my-3">Studio Ghibli Films</h1>
        <FilmCard arr={this.state.filmsArr} />
      </React.Fragment>
    );
  }
}

export default Films;
