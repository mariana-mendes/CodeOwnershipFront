import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Project from './Project/Project';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route  from 'react-router-dom/Route';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: []
        };
  }

  componentWillMount() {
    axios.get('http://localhost:4000/user')
    .then(response => {
      this.setState({projects: response.data})
    })
  }

  render() {
    return (
      <Router>
          <div>
            <div className="sidenav">
              <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"></img>
              <a>Profile</a>
              <Link to="/projects" onClick={this.handleClick} >Projects</Link>
              <a>Log out</a>
            </div>
            <Route path="/project/:_id" component={Project}/>,
            <Route path="/projects" exact strict render={()=> 
                         (<Projects projects={this.state.projects}/>)}/>  
          </div>
              
      </Router>
    );
  }
}

export default App;
