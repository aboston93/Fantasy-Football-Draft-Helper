import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home.js'
import './App.css';

// getFantasyList = () => 
//   fetch('/fantasy/fantasylist')
//   .then(res => res.json())

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
