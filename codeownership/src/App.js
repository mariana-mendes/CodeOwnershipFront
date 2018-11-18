import React, { Component } from 'react';
import Projects from './Projects/Projects';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route  from 'react-router-dom/Route';
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
        <div className="App">
          <body>
            {/* Usar reacstrap pra ajeitar isso aqui xD */}
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

            <div class="sidenav">
              <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></img>
              <a href="#about">Profile</a>
              <Link to="/projects" onClick={this.handleClick} >Projects</Link>
              <a href="#services">Log out</a>
            </div>
          </body>
          <Route path="/projects" render={()=> (<Projects projects={this.state.projects}/>)}/>      </div>
      </Router>
    );
  }
}

export default App;
