import React from 'react';
const savePlayer = (player) =>
fetch('/team/fantasylist', 
  { method : 'POST'
  , headers: { 'Content-Type': 'application/json' }
  , body: JSON.stringify(player)
  }
)

export default class Teamadd extends React.Component {
    state = {
        newPlayer:  {team: "gof", teamstats: "" }
  
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
                    name="team"
                    onChange={this.handleTextInput}
                    placeholder="team"
                />
                <input
                    type="text"
                    name="teamstats"
                    onChange={this.handleTextInput}
                    placeholder="teamstats "
                />
               
              
                <input type="submit" value="submit" />
            </form>
        )
    }
}


