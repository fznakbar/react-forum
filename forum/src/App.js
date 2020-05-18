import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'

import Home from './pages/Home'
import About from './pages/About'
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Link to='/' className="btn btn-primary p-1 m-2"> Home </Link>
        <Link to='/about' className="btn btn-danger p-1 m-2"> About Covid - 19</Link>
        <Link to='/favorites' className="btn btn-dark p-1 m-2"> Favorites </Link>

        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

          <Route exact path='/about'>
            <About />
          </Route>

          <Route exact path='/detail/:name'>
            <Detail />
          </Route>

          <Route exact path='/favorites'>
            <Favorites />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
  }
// }

export default App;
