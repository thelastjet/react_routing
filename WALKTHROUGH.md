# React Routing

## Getting Started

- Open your command line and navigate to your repos directory (if you do not have a repos folder, then you can use mkdir repos to create one)
- Use this template repository to start a new project in your repos folder: git clone <repo_name>
  cd repo_name to navigate into your new repo directory
- Make sure to run `npm install` to fetch the dependencies for the project
- Start Visual Studio Code and select 'Open Folder'. Then select repo_name to open the folder in the editor (or just type code . in your terminal inside the repo directory)
- Follow the instructions on the README.md file to complete exercises
- Open the app.js file to get started

## Exercise

- We will be using the Studio Ghibli API to make calls, and display data in our application, depending on our current url route.
- [Studio Ghibli API](https://ghibliapi.herokuapp.com/#section/Studio-Ghibli-API)
- We'll be fetching from the /films and /people endpoints for this exercise

1. Configure React Router in your application. Use the same structure as the walkthrough during the lecture. Just make sure that it works!

   - Reminder `BrowserRouter` is the starting point:

   ```
   return (
       <BrowserRouter>

       </BrowserRouter>
   );
   ```

2. Create a `Navbar` component. Your NavBar should return three `Links` that point to a specific `Route` url. One for `Home`, another for `Films`, and a third for `People`

   - Create a file named Navbar.tsx
   - Import `NavLink` from **react-router-dom**
   - Create a functional component that returns a `<nav>` jsx element with 3 `<NavLink>`'s for pushing routes: home, films, and people.

   ```
    const Navbar = () => {
    return (
        <nav className="d-flex justify-content-around bg-primary text-light text-center p-2">
        <NavLink
            exact
            to="/"
            activeClassName="border-bottom border-light bg-info nav-link text-light"
            className="nav-link text-light"
        >
            Home
        </NavLink>
        <NavLink
            to="/films"
            activeClassName="border-bottom border-light bg-info nav-link text-light"
            className="nav-link text-light"
        >
            Films
        </NavLink>
        <NavLink
            to="/people"
            activeClassName="border-bottom border-light bg-info nav-link text-light"
            className="nav-link text-light"
        >
            People
        </NavLink>
        </nav>
    );
   };
   ```

3. Next, import and then render the component in the `App` component (not inside the `Switch`)

   - Import NavBar in your `App.jsx`
   - Add the `Switch` and `Navbar` components to the App's return statement

   ```
   <Fragment>
   <NavBar />
   <Switch>

   </Switch>
   </Fragment>
   ```

4. Start configuring your first route.

   - Import Home.tsx, and `Route` from **react-router-dom**
   - Add a Home `Route` as a child to the `Switch` component in App.jsx, with a path of "/"

   ```
   <Fragment>
    <NavBar />
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
    </Switch>
   </Fragment>
   ```

   - You can style your Home component as you wish.
   - Next, add Films and People `Route`'s as a children to the `Switch` component in App.jsx, with a path of "/films" and "/people" respectively

   ```
    <Fragment>
    <NavBar />
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/films">
            <Films />
        </Route>
        <Route exact path="/people">
            <People />
        </Route>
    </Switch>
   </Fragment>
   ```

5. Create view components for Films and People

   - Say, for /films. After navigating to localhost:3000/films, you should see Studio Ghibli's list of films.
   - The data should only be loaded and displayed when you navigate to /films. You should use componentDidMount() and fetch to make this request.
   - Import React and Component from 'react'

   `import React, { Component } from 'react';`

   - Create a class component named Films that extends Component
   - The constructor should take in props as a parameter, call the Component super() constructor, and set state as an array for holding the list of films, and a boolean value for determining if the data has loaded:

   ```
    import React, { Component } from "react";

    class Films extends Component {
    constructor(props) {
        super(props);

        this.state = {
        filmsArr: [],
        hasData: false,
        };
    }
    }
   ```

   - Next, complete the class component with a render() method that returns jsx

   ```
    render() {
    return (
        <React.Fragment>
            <h1 className="my-3">Studio Ghibli Films</h1>
            <ul>
                {this.state.filmsArr.map(film => {
                    return <li>{film.title}</li>
                })}
            </ul>
        </React.Fragment>
    );
   }
   ```

6. Now you'll need to fetch the films data from the [Studio Ghibli API - Films](https://ghibliapi.herokuapp.com/films)

   - Add a `componentDidMount()` lifecycle method in your Films.tsx component
   - Use fetch API to fetch the films array, parse the response data as JSON, and set the films list to the component state

   ```
    componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          filmsArr: data,
          hasData: true,
        });
      })
      .catch((err) => console.log(err));
   }
   ```

7. Configure your second route. Repeat the steps from the `/films` route, but for `/people`. Use [Studio Ghibli API - People](https://ghibliapi.herokuapp.com/people).

- At the end of these tasks, you should have at least THREE pages in your application, and you should be able to navigate to them simply by clicking a link.

## BONUS

- Add more routes based on Studio Ghibli's api endpoints.
