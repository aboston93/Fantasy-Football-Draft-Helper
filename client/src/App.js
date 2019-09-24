
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/Home.js'
import './App.css';
import Playeradd from './components/player'
import React, { Component } from 'react'
import Detailadd from './components/detail'
import Teamadd  from "./components/team"
import  {MaterialTableDemo} from "./components/fantasytable"

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
const Detail  = ({ pros, cons, stats,  }) =>
    (<li>{pros} - {cons}- {stats}</li>)

// all platers into a table
const Details = (details) => (
    <ul>
        {details.map(Detail)}
        {/* assignments.map(x => assignment(x)) */}
    </ul>
)

const team  = ({ team, teamstats,   }) =>
    (<li>{team} - {teamstats}</li>)

// all platers into a table
const teams = (teams) => (
    <ul>
        {teams.map(team)}
        {/* assignments.map(x => assignment(x)) */}
    </ul>
)


const getAllPlayer = () =>
  fetch('fantasy/fantasylist')
    .then(res => res.json())
    .catch(() => []) //if an error occurs then return an Promise that resolves to an empty array



const getPlayer= (_id) =>
  fetch(`/fantasy/${_id}`)
    .then(res => res.json())
    .catch(() => [])


    const getAllDetail = () =>
    fetch('detail/fantasylist')
      .then(res => res.json())
      .catch(() => []) //if an error occurs then return an Promise that resolves to an empty array
  
  
  
  const getDetail= (detailid) =>
    fetch(`/detail/${detailid}`)
      .then(res => res.json())
      .catch(() => [])
  



export default class App extends Component {
  state =  
    { 
        
         players: [
         {Name:"",  Surname:" ",Rank:0, position:"", Yearspro:0},
            {pros:" ",cons:"", stats:""},
            {team:"", teamstats:""}
            
            ]
        
    }

  componentWillMount() {
    this.getAllPlayers().then(players => this.setState({players}))
    this.getAllDetails().then(details => this.setState({details}))
    this.getAllTeams().then(teams => this.setState({teams}))
    
  }

  getAllPlayers() {
   return( fetch("/fantasy/fantasylist")
    .then(res => res.json())
   )
      
  }

  getAllDetails() {
    return( fetch("/detail/fantasylist")
     .then(res => res.json())
    )
       
   }
   getAllTeams() {
    return( fetch("/team/fantasylist")
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
        <Detailadd addPlayer= {this.addplayer}/>
        {Details(this.state.players)}
        <Teamadd addPlayer= {this.addplayer}/>
        {teams(this.state.players)}
        {MaterialTableDemo}
      </div>
    )
  }
}
