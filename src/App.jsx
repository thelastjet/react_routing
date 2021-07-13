import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Films from './Pages/Films';
import Home from './Pages/Home';
import People from './Pages/People';
import Vehicles from './Pages/Vehicles';
import Locations from './Pages/Locations';


const App = () => {

  return (
    
    <BrowserRouter>
      <h1>Studio Ghibli API</h1>
      <main className="app">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/films">
            <Films />
          </Route>
          <Route path="/people">
            <People />
          </Route>
          <Route path="/vehicles">
            <Vehicles />
          </Route>
          <Route path="/locations">
            <Locations />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
