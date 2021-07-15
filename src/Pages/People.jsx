import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function People() {
    let [people, setPeople] = useState([]);

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
            <hr />
            <div>
                {people.map((person) => {
                    return (
                        <div key={person.id} className="card">
                            <h3>{person.name}</h3>
                            <button>
                                <Link to={`/people/${person.id}`}>View</Link>
                            </button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default People;