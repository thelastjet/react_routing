import { Link } from "react-router-dom";
import { routes } from "../data/routes";

function Navbar() {
    return (
        <nav>
            <ul className="navbar navbar-dark bg-dark">
                {routes.list.map(({path, label, includeNav }) => {
                    if (includeNav) {
                        return (
                            <li className="nav-link">
                                <Link className="navbar-brand" to={path}>{label}</Link>
                            </li>
                        );
                    } else return null;
                })}
            </ul>
        </nav>
    );
}

export default Navbar;