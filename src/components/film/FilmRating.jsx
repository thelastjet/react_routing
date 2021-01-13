import React from "react";

function FilmRating(props) {
  if (50 <= props.rating && props.rating < 80) {
    return <span className="badge badge-warning">{props.rating}</span>;
  } else if (props.rating < 50) {
    return <span className="badge badge-danger">{props.rating}</span>;
  } else {
    return <span className="badge badge-success">{props.rating}</span>;
  }
}

export default FilmRating;
