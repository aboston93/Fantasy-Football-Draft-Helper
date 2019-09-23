import React from 'react';
const Player = ({Name, Surname, Rank, position,Yearspro}) => 
  (<li>{Name} - {Surname}- {Rank}-{position}-{Yearspro}</li>)
// all platers into a table
  const Players  = (players) => (
    <ul>
      {players.map(Player)}
      {/* assignments.map(x => assignment(x)) */}
    </ul>
  )

   export default class Playeradd extends React.Component {
  state= { Name:"Tom", Surname:"Brady", Rank:1, position:"QB", Yearspro:3

  }

  handleTextInput = (evnt) => {
    //1. copy from state
    let newPlayer = {...this.state.newPlayer}

    //2. modify state
    newPlayer[evnt.target.name] = evnt.target.value
    newPlayer[evnt.target.Surname] = evnt.target.value
    newPlayer[evnt.target.Rank] = evnt.target.value
    newPlayer[evnt.target.position] = evnt.target.value
    newPlayer[evnt.target.Yearspro] = evnt.target.value

    //3. setState
    this.setState({ newPlayer })
  }

  handleSubmit = (evnt) => {
    evnt.preventDefault();

    this.props.addPlayer(this.state.newPlayer)
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text"
          name="Name"
          onChange={this.handleTextInput}
          placeholder="Player Name"
        />
        <input 
          type="text"
          name="Surname"
          onChange={this.handleTextInput}
          placeholder="Player Surname "
        />
        <input 
          type="number"
          name="Rank"
          onChange={this.handleTextInput}
          placeholder="Player Rank"
        />
        <input 
          type="text"
          name="position"
          onChange={this.handleTextInput}
          placeholder="Player  Position"
        />
        <input 
          type="number"
          name="Yearspro"
          onChange={this.handleTextInput}
          placeholder="player Yearspro"
        />
        <input type="submit" value="+" />
      </form>
    )
  }
}

const getAllPlayer = () =>
  fetch('fantasy/fantasylist')
    .then(res => res.json())
    .catch(() => []) //if an error occurs then return an Promise that resolves to an empty array



const getPlayer= (courseId) =>
  fetch(`/fantasy/${courseId}`)
    .then(res => res.json())
    .catch(() => [])



const savePlayer = (assignment) =>
  fetch('/fantasy/fantasylist', 
    { method : 'POST'
    , headers: { 'Content-Type': 'application/json' }
    , body: JSON.stringify(assignment)
    }
  )
