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
                        <div className="card">
                            <h4 key={vehicle.key}>Name:  {vehicle.name}</h4>
                            <h4>Description:  {vehicle.description}</h4>
                            <h4>Class:  {vehicle.vehicle_class}</h4>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Vehicles;