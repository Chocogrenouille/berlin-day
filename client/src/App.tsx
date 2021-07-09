import * as React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from "./components/Signup";
import Login from "./components/Login";
import Events from './components/Events';
import Creator from './components/Creator';

function App () {
  
  return (
    <div className="App">
      <Navbar />
      <Route exact path="/signup" render={(props) => (
            <Signup/>
          )}
      />
      <Route exact path="/login" render={(props) => (
            <Login/>
          )}
      />
      <Route exact path="/events" render={(props) => (
            <Events/>
          )}
      />
      <Route exact path="/creator" render={(props) => (
            <Creator/>
          )}
      />
    </div>
  );
}

export default App;
