import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Project from './Project/Project';
import NewUser from './NewUser/NewUser';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route  from 'react-router-dom/Route';
import { Jumbotron, Button, Badge } from 'react-bootstrap';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [],
      loggedIn: false
    };

    this.toggle = this.toggle.bind(this);
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
         {this.state.loggedIn ? 
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
          </div> :
              <Jumbotron >
                       <legend>  
                         <Badge color="secondary">Welcome!
                             Analyse your projects git! </Badge>
                      </legend>
                      <Button  onClick={this.toggle} color="primary">Login</Button>{' '}
                      <Link to="/newUser" color="primary">New User?</Link>
                      <hr/>
                      <div>
                        
                        <Route path="/newUser" exact strict component={NewUser}/>
                      </div>
            </Jumbotron>   }
      </Router>
    );
  }


  toggle() {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
}
  
}

export default App;
