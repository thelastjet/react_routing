import React from "react";

function PeopleCards(props) {
  const listGroup = props.arr.map((person) => {
    return (
      <div key={person.id} className="col-md-3 p-2">
        <h4>{person.name}</h4>
        <p>
          {person.age}
          <br></br>
          {person.gender}
          <br></br>
          Eye Color: {person.eye_color}
          <br></br>
          Hair Color: {person.hair_color}
        </p>
      </div>
    );
  });

  return <div className="row m-2 border rounded shadow">{listGroup}</div>;
}

export default PeopleCards;
