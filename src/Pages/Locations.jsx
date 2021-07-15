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
                        <div className="card">
                            <h4 key={location.key}>Name:  {location.name}</h4>
                            <h4>Climate:  {location.climate}</h4>
                            <h4>Terrain:  {location.terrain}</h4>
                            <button>
                                <Link to={`/locations/${location.id}`}>View</Link>
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Locations;