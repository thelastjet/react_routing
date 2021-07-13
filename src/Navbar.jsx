import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav id="navbar">
            <div>
                <p>
                    <Link className="App-link" exact to='/'>Home</Link>
                    <Link className="App-link" exact to="/films">Films</Link>
                    <Link className="App-link" exact to="/people">People</Link>
                    <Link className="App-link" exact to="/vehicles">Vehicles</Link>
                    <Link className="App-link" exact to="/locations">Locations</Link>
                </p>
            </div>
        </nav>
    )
}

export default Navbar;