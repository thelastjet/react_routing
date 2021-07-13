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
            <div>
                {films.sort((film1, film2) => film2.rt_score - film1.rt_score).map((film) => {
                    return (
                        <div key={film.key}>
                            <hr />
                            <h2>Original Title - {film.original_title}</h2>
                            <h2>English Title - {film.title}</h2>
                            <p id="filmsParagraph">Movie Release Date - {film.release_date}</p>
                            <p id="filmsParagraph">Rotten Tomato Score - {film.rt_score}</p>
                        </div>);
                })}
            </div>
            <div>
                <p id="navbar">
                    <Link className="App-link" exact to="/">Home</Link>
                    <Link className="App-link" exact to="/people">People</Link>
                    <Link className="App-link" exact to="/vehicles">Vehicles</Link>
                    <Link className="App-link" exact to="/locations">Locations</Link>
                </p>
            </div>
        </div>
    )
}

export default Films;