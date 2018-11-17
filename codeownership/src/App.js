import React, { Component } from 'react';
import Projects from './Projects/Projects';
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
      <div className="App">
      <div>
      <head>

</head>
<body>
  {/* Usar reacstrap pra ajeitar isso aqui xD */}
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<div class="sidenav">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></img>
  <a href="#about">Profile</a>
  <a href="#services"  onClick={this.handleClick} >Projects</a>
  <a href="#services">Log out</a>
</div>
     
</body>
      </div>
        <div>
          <Projects projects={this.state.projects}/>
       </div>
      </div>
     
    );
  }
}

export default App;
