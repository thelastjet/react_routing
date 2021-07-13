import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function People(props) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/people")
        .then((data) => data.json())
        .then((data) => setPeople(data))
        .catch((error) => console.log(error));
    }, [people]);

    console.log(people);

    return (
        <div>
            <h1>People of Studio Ghibli</h1>
            <div id="list">
                <ul>
                    {people.map((person) => {
                        return (
                            <div>
                                <li key={person.key}>{person.name}</li>
                                <hr />
                            </div>
                        )

                    })}
                </ul>
            </div>
            <div>
                <p id="navbar">
                    <Link className="App-link" exact to="/">Home</Link>
                    <Link className="App-link" exact to="/films">Films</Link>
                    <Link className="App-link" exact to="/vehicles">Vehicles</Link>
                    <Link className="App-link" exact to="/locations">Locations</Link>
                </p>
            </div>
            
        </div>
    )
}

export default People;