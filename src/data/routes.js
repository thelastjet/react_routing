import Home from '../Pages/Home';
import Films from '../Pages/Films';
import People from '../Pages/People';
import Vehicles from '../Pages/Vehicles';
import Locations from '../Pages/Locations';
import IndividualFilm from '../Pages/IndividualFilm';
import IndividualPerson from '../Pages/IndividualPerson';
import IndividualLocation from '../Pages/IndividualLocation';


class Route {
    constructor(component, path, label, includeNav = true) {
        this.component = component;
        this.path = path;
        this.label = label;
        this.includeNav = includeNav;
    }
}

class Routes {
    constructor() {
        this.list = [];
    }

    addRoute(route) {
        this.list.push(route);
        return this;
    }
}

export const routes = new Routes()
    .addRoute(new Route(Home, "/", "Home"))
    .addRoute(new Route(Films, "/films", "Films"))
    .addRoute(new Route(IndividualFilm, "/films/:id", "Single Film", false))
    .addRoute(new Route(People, "/people", "People"))
    .addRoute(new Route(IndividualPerson, "/people/:id", "Single Person", false))
    .addRoute(new Route(Locations, "/locations", "Locations"))
    .addRoute(new Route(IndividualLocation, "/locations/:id", "Single Location", false))
    .addRoute(new Route(Vehicles, "/vehicles", "Vehicles"))
    