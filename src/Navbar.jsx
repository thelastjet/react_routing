import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <ul>
            <li>
                <Link className="App-link" exact to='/'>Home</Link>
            </li>
            <li>
                <Link className="App-link" exact to="/films">Films</Link>
            </li>
            <li>
                <Link className="App-link" exact to="/people">People</Link>
            </li>
            <li>
                <Link className="App-link" exact to="/vehicles">Vehicles</Link>
            </li>
            </ul>
        </nav>
    )
}

export default Navbar;