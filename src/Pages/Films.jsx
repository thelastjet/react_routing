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
                            <h2>{film.original_title} - Original Title</h2>
                            <h2>{film.title} - English Title</h2>
                            <p>{film.release_date} - Movie Release Date</p>
                            <p>{film.rt_score} - Rotten Tomato Score</p>
                        </div>);
                })}
            </div>
        
            <Link className="App-link" exact to="/">Home</Link>
            <Link className="App-link" exact to="/people">People</Link>
        </div>
    )
}

export default Films;