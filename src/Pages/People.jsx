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
            <h1>People</h1>
            <div id="list">
                <ul>
                    {people.map((person) => {
                        return <li key={person.key}>{person.name}</li>;
                    })}
                </ul>
            </div>
        

            <Link className="App-link" exact to="/">Home</Link>
            <Link className="App-link" exact to="/films">Films</Link>
        </div>
    )
}

export default People;