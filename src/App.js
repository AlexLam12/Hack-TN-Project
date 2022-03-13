import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import Home from './components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
