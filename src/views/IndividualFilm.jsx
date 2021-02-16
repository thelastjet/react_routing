import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import { customFetch } from "../utils/customFetch";

const IndividualFilm = () => {
  const [film, setFilm] = useState({});

  const history = useHistory();
  const { id } = useParams();
  const { pathname } = useLocation();
  console.log(pathname);

  useEffect(() => {
    if (film.name === undefined) {
      customFetch(`films/${id}`, setFilm);
    }
  }, []);

  return (
    <main className="container">
      <div className="card shadow">
        <div className="card-header">
          <button className="btn btn-info" onClick={history.goBack}>
            Back
          </button>
        </div>
        <div className="card-body">
          <h3>{film.title}</h3>
          <h6>Director: {film.director}</h6>
          <h6>Producer: {film.producer}</h6>
          <hr />
          <p className="card-text">Released: {film.release_date}</p>
          <p className="card-text">Rotten Tomatoes Score: {film.rt_score}</p>
          <hr />
          <h6>Description:</h6>
          <p className="card-text">{film.description}</p>
        </div>
      </div>
    </main>
  );
};

export default IndividualFilm;
