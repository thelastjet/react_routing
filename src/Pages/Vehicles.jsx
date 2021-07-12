import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Vehicles(props) {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        fetch("https://ghibliapi.herokuapp.com/vehicles")
        .then((data) => data.json())
        .then((data) => setVehicles(data))
        .catch((error) => console.log(error));
    }, [vehicles]);

    return (
        <div>
            <h1>Vehicles</h1>
            <div id="list">
                <ul>
                    {vehicles.map((vehicle) => {
                        return <li key={vehicle.key}>{vehicle.name}</li>;
                    })}
                </ul>
            </div>
        

            <Link className="App-link" exact to="/">Home</Link>
            <Link className="App-link" exact to="/films">Films</Link>
            <Link className="App-link" exact to="/people">People</Link>
        </div>
    )
}

export default Vehicles;