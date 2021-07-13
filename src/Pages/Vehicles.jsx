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
            <hr />
            <div>
                {vehicles.map((vehicle) => {
                    return (
                        <div>
                            <h4 key={vehicle.key}>Name:  {vehicle.name}</h4>
                            <h4>Description:  {vehicle.description}</h4>
                            <h4>Class:  {vehicle.vehicle_class}</h4>
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
                    <Link className="App-link" exact to="/locations">Locations</Link>
                </p>
            </div>
        </div>
    )
}

export default Vehicles;