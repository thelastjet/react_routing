import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './page-components/Navbar';
import { routes } from './data/routes';

const App = (props) => {

  return (
    
    <BrowserRouter>
      <Navbar />
      <main className="container my-3 bg-main">
        <Switch>
          {routes.list.map((route, idx) => (
            <Route key={idx} exact path={route.path}>
              {(props) => <route.component {...props}/>}
            </Route>
          ))}
        </Switch>
      </main>
    </BrowserRouter>
  );
};

export default App;
