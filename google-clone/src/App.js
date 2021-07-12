import React from 'react';
import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";
import SearchPage from './pages/SearchPage';


function App() {
  return (

    <div className="App">
      <Router>

        {/* home page */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>

        {/* Search Result Page*/}
        
          <Route exact path='/search'>
            <SearchPage />
          </Route>
        </Switch>

      </Router>
    </div>

  );
}

export default App;
