import { useState, useEffect } from "react";
import FilmCard from "../components/FilmCard";
import { customFetch } from "../utils/customFetch";

const Films = () => {
  const [filmList, setFilmList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    if (filmList.length === 0) {
      customFetch("films", setFilmList, setFilterList);
    }
  }, []);

  const titleFilter = (event) => {
    let filteredArr = filmList.filter((film) =>
      film.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilterList(filteredArr);
  };

  const filterFilms = (event) => {
    let sortedArr = Array.from(filmList);
    if (event.target.value === "newest" || event.target.value === "oldest") {
      if (event.target.value === "newest") {
        setFilterList(sortedArr.reverse());
      } else setFilterList(filmList);
    } else if (event.target.value === "rt") {
      sortedArr.sort((a, b) => b.rt_score - a.rt_score);
      setFilterList(sortedArr);
    } else {
      sortedArr.sort((film1, film2) => {
        if (film1.title > film2.title) {
          return 1;
        } else if (film1.title < film2.title) {
          return -1;
        } else return 0;
      });
      if (event.target.value === "a-z") {
        setFilterList(sortedArr);
      } else if (event.target.value === "z-a") {
        setFilterList(sortedArr.reverse());
      } else {
        setFilterList(filmList);
      }
    }
  };

  return (
    <main className="container">
      <h1>Films</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            name="titleSearch"
            id="titleSearch"
            className="form-control my-2"
            placeholder="Search Title..."
            onChange={titleFilter}
          />
          <select
            name="filmsSort"
            id="filmsSort"
            className="form-control my-2"
            onChange={filterFilms}
          >
            <option defaultValue="default">Default</option>
            <option value="a-z">Title A-Z</option>
            <option value="z-a">Title Z-A</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rt">High RT</option>
          </select>
          <hr />
          <div className="list-group">
            {filterList.map((film) => {
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
      </div>
    </main>
  );
};

export default Films;
