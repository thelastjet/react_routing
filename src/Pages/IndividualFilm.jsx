import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function IndividualFilm(props) {
  let [film, setFilm] = useState({});
  let [feedback, setFeedback] = useState(null);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/films/" + id)
      .then((res) => {
        if (res.ok) {
          setFeedback(null);
          return res.json();
        } else {
          throw new Error("Film not found");
        }
      })
      .then((data) => setFilm(data))
      .catch((err) => {
        console.error(err);
        setFeedback(err.message);
      });
  }, []);

  return (
    <div className="container singleCard">
      <p className="feedback">{feedback}</p>
      <div className="card">
        <div className="card-header">
          <button className="btn btn-secondary" onClick={history.goBack}>
            Back
          </button>
        </div>
        <div className="card-body">
          <h1>{film.title}</h1>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <span className="badge">Rotten Tomatoes Score: {film.rt_score}</span>
        </div>
      </div>
    </div>
  );
}
