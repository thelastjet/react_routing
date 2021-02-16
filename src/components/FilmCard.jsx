import { Link } from "react-router-dom";

const FilmCard = ({ id, title, release_date, rt_score, description }) => {
  const colorScore = (score) => {
    let color;
    if (score >= 95) {
      color = "success";
    } else if (score >= 85) {
      color = "warning";
    } else {
      color = "danger";
    }

    return `text-${color}`;
  };

  return (
    <div className="card shadow">
      <Link className="nav-link text-dark" to={`/films/${id}`}>
        <div className="card-body">
          <h3 className={colorScore(rt_score)}>{title}</h3>
          <hr />
          <p className="card-text">Released: {release_date}</p>
          <p className="card-text">Rotten Tomatoes Score: {rt_score}</p>
        </div>
      </Link>
    </div>
  );
};

export default FilmCard;
