import { Link } from "react-router-dom";

function Home(props) {
    return (
        <div>
            <h1>Home</h1>
            <p>Click on the "Films" link to see the films made by Studio Ghibli and the "People" link to see all of the people behind the work.</p>

            <Link className="App-link" exact to="films">Films</Link>
            <Link className="App-link" exact to="people">People</Link>
        </div>
    )
}

export default Home;