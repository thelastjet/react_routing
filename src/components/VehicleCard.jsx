const VehicleCard = ({ name, description, vehicle_class }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>{name}</h3>
        <p className="card-text">Vehicle Class: {vehicle_class}</p>
        <h6>Description:</h6>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
};

export default VehicleCard;
