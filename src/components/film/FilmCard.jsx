import React from "react";
import FilmRating from "./FilmRating";

function FilmCards(props) {
  const listGroup = props.arr.map((film) => {
    return (
      <div key={film.id} className="col-md-12 card p-2 my-2 shadow">
        <h4>{film.title}</h4>
        <p>{film.description}</p>
        <h6 className="text-right">Released: {film.release_date}</h6>
        <FilmRating rating={film.rt_score} />
      </div>
    );
  });

  return <div className="row m-3">{listGroup}</div>;
}

export default FilmCards;
