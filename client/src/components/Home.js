import React from 'react'; // const { React } = require('react')

const fantasydata = (text) => {
  return (
    <td>{text}</td>
  )
}

const fantasyheader = (headerText) => {
  return (
    <h3>{headerText}</h3>
  )
}

const fantasytable = (atable) => {

  return (
    <div>
      {fantasyheader(atable.listName)}
      <tr>
        {atable.listItems.map(fantasydata)}
      </tr>
    </div>
  )
}

const fantasyContainer = (lists, addNewItemAtIndex) => {
  return (
    <table>
      {lists.map(fantasytable)}
    </table>
  )
}

class TodoItemForm extends React.Component {

  state = {
    newItemText: ""
  }

  handleInputChange = (evnt) => {
    this.setState({ newItemText: evnt.target.value })
  }

  handleFormSubmission = (evnt) => {
    evnt.preventDefault();

    this.props.addNewTodoItemText(this.state.newItemText)
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmission}>
        <input 
          type="text" 
          placeholder="new item" 
          value={this.state.newItemText}  
          onChange={this.handleInputChange}
        />
        <input type="submit" value="add item" />
      </form>
    )
  }
}

class App extends React.Component {

  state = {
    fantasyaid:
      { Rank : "one"
      , name: ["brady", "eat lunch", "win"]
      }
  }
  //auto-called by React when a new instance of this component is created
  //i.e. <App /> is used in another component
  componentDidMount() {
    this.getTodoItemsFromServer();
  }

  getTodoItemsFromServer = () => {
    fetch('/todolist')
    .then(res => res.json())
    .then(listOfItems => {
      this.setItemList(listOfItems);
    })
  };

  setItemList = (list) => {
    let fantasylist = {...this.state.fantasylist};
    fantasylist.listItems = list;
    this.setState({ fantasylist });
  }

  sendNewItemToServer = (newItemText) => {
    fetch('/fantasylist',
      {
        method: 'POST'
        , body: JSON.stringify(newItemText)
        , headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => this.getTodoItemsFromServer())
  }

  addNewItem = (newItemText) => {

    //this.state.todoList.listItems.push(newItemText)
    //create a copy of our todo list
    let fantasylist = {...this.state.fantasylist} //[...this.state.todoList.listItems]

    fantasylist.listItems.push(newItemText)

    this.setState({ fantasylist })
    
  }

  render() {
    return (
      <div>
        <h1>Your fantasy draft</h1>
        {/* todoItemForm() */}
        <TodoItemForm 
          addNewTodoItemText={this.sendNewItemToServer}
          someText="ezekiel ellitot"
        />
        {fantasyContainer( this.state.fantasylist )}
      </div>
    );
  }
}

export default App; // module.exports = { App }