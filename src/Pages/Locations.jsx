import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Locations(props) {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/locations")
        .then((data) => data.json())
        .then((data) => setLocations(data))
        .catch((error) => console.log(error));
    }, [locations]);

    return (
        <div>
            <h1>Locations</h1>
            <hr />
            <div>
                {locations.map((location) => {
                    return (
                        <div>
                            <h4 key={location.key}>Name:  {location.name}</h4>
                            <h4>Climate:  {location.climate}</h4>
                            <h4>Terrain:  {location.terrain}</h4>
                            <hr />
                        </div>
                    );
                })}
            </div>
            <div>
                <p id="navbar">
                    <Link className="App-link" exact to="/">Home</Link>
                    <Link className="App-link" exact to="/films">Films</Link>
                    <Link className="App-link" exact to="/people">People</Link>
                    <Link className="App-link" exact to="/vehicles">Vehicles</Link>
                </p>
            </div>
            
        </div>
    )
}

export default Locations;