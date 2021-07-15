import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function IndividualLocation(props) {
  let [location, setLocation] = useState({});
  let [feedback, setFeedback] = useState(null);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    fetch("https://ghibliapi.herokuapp.com/locations/" + id)
      .then((res) => {
        if (res.ok) {
          setFeedback(null);
          return res.json();
        } else {
          throw new Error("Location not found");
        }
      })
      .then((data) => setLocation(data))
      .catch((err) => {
        console.error(err);
        setFeedback(err.message);
      });
  }, []);

  return (
    <div className="container singleCard">
      <p className="feedback">{feedback}</p>
      <div className="card">
        <div className="card-header">
          <button className="btn btn-secondary" onClick={history.goBack}>
            Back
          </button>
        </div>
        <div className="card-body">
          <h1>{location.name}</h1>
          <p>Climate: {location.climate}</p>
          <p>Terrain: {location.terrain}</p>
        </div>
      </div>
    </div>
  );
}