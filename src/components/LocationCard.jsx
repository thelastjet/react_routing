const LocationCard = ({ name, climate, terrain }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>{name}</h3>
        <p className="card-text">Climate: {climate}</p>
        <p className="card-text">Terrain: {terrain}</p>
      </div>
    </div>
  );
};

export default LocationCard;
