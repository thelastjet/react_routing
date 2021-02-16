import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { customFetch } from "../utils/customFetch";

const Films = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    if (filmList.length === 0) {
      customFetch("films", setFilmList);
    }
  }, []);

  return (
    <main className="container">
      <h1>Films</h1>
      <hr />
      <div className="row">
        <div className="card-columns">
          {filmList.map((film) => {
            return (
              <FilmCard
                key={film.id}
                id={film.id}
                title={film.title}
                release_date={film.release_date}
                rt_score={film.rt_score}
                description={film.description}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Films;
