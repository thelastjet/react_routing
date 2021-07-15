import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Films(props) {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/films/")
        .then((data) => data.json())
        .then((data) => setFilms(data))
        .catch((error) => console.log(error));
    }, [films]);

    return (
        <div>
            <h1>Films</h1>
            <hr />
            <div>
                {films.sort((film1, film2) => film2.rt_score - film1.rt_score).map((film) => {
                    return (
                        <div key={film.key} className="card">
                            <h2>Original Title - {film.original_title}</h2>
                            <h2>English Title - {film.title}</h2>
                            <p id="filmsParagraph">Movie Release Date - {film.release_date}</p>
                            <p id="filmsParagraph">Rotten Tomato Score - {film.rt_score}</p>
                            <button>
                                <Link to={`/films/${film.id}`}>View</Link>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Films;