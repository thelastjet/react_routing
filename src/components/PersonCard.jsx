const PersonCard = ({ name, gender, age }) => {
  return (
    <div className="card shadow">
      <div className="card-body">
        <h3>{name}</h3>
        <p className="card-text">Gender: {gender}</p>
        <p className="card-text">Age: {age}</p>
      </div>
    </div>
  );
};

export default PersonCard;
