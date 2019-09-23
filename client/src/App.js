
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Home from './components/Home.js'
import './App.css';
import Playeradd from './components/player'
import React, { Component } from 'react'

// getFantasyList = () => 
//   fetch('/fantasy/fantasylist')
//   .then(res => res.json())
// single player componet






export default class App extends Component {
  state =  
    { course: 
        { name : "Test Course 1"
        , assignments: 
            [ {name: "first  assignment", grade: 100}
            , {name: "second assignment", grade:  90}
            , {name: "third  assignment", grade:  80}
            ]
        }
    }

  componentDidMount() {
    this.getAppCourseWork()
  }

  getAppCourseWork() {
    getFirstCourseWork()
      .then(course => getAssignmentsForCourse(course))
      .then(course => {
        this.setState({ course: {...course} })
      })
  }

  addNewAssignment = (createdAssignment) => {

    createdAssignment.grade = Number.parseInt(createdAssignment.grade)
    createdAssignment.courseworkId = this.state.course._id

    saveAssignment(createdAssignment)
      .then(() => this.getAppCourseWork())
  }

  render() {
    return (
      <div>
        <NewAssignmentForm addAssignment={this.addNewAssignment}/>
        {course(this.state.course)}
      </div>
    )
  }
}
