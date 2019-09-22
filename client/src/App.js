import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/Home.js'
import './App.css';
import Table from "./components/fantasytable"

// getFantasyList = () => 
//   fetch('/fantasy/fantasylist')
//   .then(res => res.json())

class App extends React.Component {
  render() {
    return (
    
    <div className="App">
      
      <Table/>
     
      
    </div>
    )}
}


export default App;
