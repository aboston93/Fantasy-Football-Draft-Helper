import React from 'react';
const savePlayer = (player) =>
fetch('/detail/fantasylist', 
  { method : 'POST'
  , headers: { 'Content-Type': 'application/json' }
  , body: JSON.stringify(player)
  }
)

export default class Detailadd extends React.Component {
    state = {
        newPlayer:  {pros: "ggof", cons: "Bad", stats: 1, }

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
                    name="pros"
                    onChange={this.handleTextInput}
                    placeholder="pros"
                />
                <input
                    type="text"
                    name="cons"
                    onChange={this.handleTextInput}
                    placeholder="cons "
                />
                <input
                    type="text"
                    name="stats"
                    onChange={this.handleTextInput}
                    placeholder="stats"
                />
                
              
                <input type="submit" value="submit" />
            </form>
        )
    }
}


