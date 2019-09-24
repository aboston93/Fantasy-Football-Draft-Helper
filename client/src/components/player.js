import React from 'react';
const Player = ({ Name, Surname, Rank, position, Yearspro }) =>
    (<li>{Name} - {Surname}- {Rank}-{position}-{Yearspro}</li>)


    const savePlayer = (player) =>
  fetch('/fantasy/fantasylist', 
    { method : 'POST'
    , headers: { 'Content-Type': 'application/json' }
    , body: JSON.stringify(player)
    }
  )
// all platers into a table
const Players = (players) => (
    <ul>
        {players.map(Player)}
        {/* assignments.map(x => assignment(x)) */}
    </ul>
)

export default class Playeradd extends React.Component {
    state = {
        newPlayer:  {Name: "Tom", Surname: "Brady", Rank: 1, position: "QB", Yearspro: 3}

    }

    handleTextInput = (evnt) => {
        //1. copy from state
        let newPlayer = { ...this.state.newPlayer }

        //2. modify state
        newPlayer[evnt.target.name] = evnt.target.value
        
        //3. setState
        this.setState({ newPlayer })
    }

    handleSubmit = (evnt) => {
        evnt.preventDefault();
savePlayer(this.state.newPlayer)
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
                <input
                    type="string"
                    name="source"
                    onChange={this.handleTextInput}
                    placeholder="source"
                />
                <input type="submit" value="+" />
            </form>
        )
    }
}


