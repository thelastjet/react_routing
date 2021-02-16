import { useState, useEffect } from "react";
import LocationCard from "../components/LocationCard";
import { customFetch } from "../utils/customFetch";

const Locations = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    if (locations.length === 0) {
      customFetch("locations", setLocations);
    }
  }, []);

  return (
    <main className="container">
      <h1>Locations</h1>
      <hr />
      <div className="row">
        <div className="card-columns">
          {locations.map((location) => {
            return (
              <LocationCard
                key={location.id}
                name={location.name}
                climate={location.climate}
                terrain={location.terrain}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Locations;
