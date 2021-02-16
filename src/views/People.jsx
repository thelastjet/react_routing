import { useEffect, useState } from "react";
import PersonCard from "../components/PersonCard";
import { customFetch } from "../utils/customFetch";

const People = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (people.length === 0) {
      customFetch("people", setPeople);
    }
  }, []);

  return (
    <main className="container">
      <h1>People</h1>
      <hr />
      <div className="card-columns">
        {people.map((person) => {
          return (
            <PersonCard
              key={person.key}
              name={person.name}
              gender={person.gender}
              age={person.age}
            />
          );
        })}
      </div>
    </main>
  );
};

export default People;
