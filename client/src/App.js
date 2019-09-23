
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/Home.js'
import './App.css';
import Playeradd from './components/player'
import React, { Component } from 'react'

const Player = ({ Name, Surname, Rank, position, Yearspro }) =>
    (<li>{Name} - {Surname}- {Rank}-{position}-{Yearspro}</li>)
// all platers into a table
const Players = (players) => (
    <ul>
        {players.map(Player)}
        {/* assignments.map(x => assignment(x)) */}
    </ul>
)
// getFantasyList = () => 
//   fetch('/fantasy/fantasylist')
//   .then(res => res.json())
// single player componet



const getAllPlayer = () =>
  fetch('fantasy/fantasylist')
    .then(res => res.json())
    .catch(() => []) //if an error occurs then return an Promise that resolves to an empty array



const getPlayer= (_id) =>
  fetch(`/fantasy/${_id}`)
    .then(res => res.json())
    .catch(() => [])






export default class App extends Component {
  state =  
    { 
        
         players: 
            [ {Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3},
            {Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3},
            {Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3},
            {Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3},
            {Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3}
            ]
        
    }

  componentWillMount() {
    this.getAllPlayers().then(players => this.setState({players}))
  }

  getAllPlayers() {
   return( fetch("/fantasy/fantasylist")
    .then(res => res.json())
   )
      
  }


  // savePlayer () {
  //   (createdPlayer) .then(() => this.getAppCourseWork())
  // }

  render() {
    return (
      <div>
        <Playeradd addPlayer={this.addPlayer}/>
        {Players(this.state.players)}
      </div>
    )
  }
}
