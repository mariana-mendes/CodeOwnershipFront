import React, { Component } from 'react';
import Projects from './Projects/Projects';
import Project from './Project/Project';
import Login from './Login/Login';

import Navigation from './Navigation/Navigation';
import * as ROUTES from './constants/constants';
import NewUser from './NewUser/NewUser';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
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
        this.setState({ projects: response.data })
      })
  }

  render() {
    return (

      <Router>
        <div>
          <Navigation/>
          <hr/>
          {/* <Route exact path={ROUTES.LANDING} component={LandingPage} /> */}
          <Route path={ROUTES.SIGN_UP} component={Login} />
          <Route path={ROUTES.SIGN_IN} component={NewUser} />
          {/* <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} /> */}
          {/* <Route path={ROUTES.HOME} component={HomePage} /> */}
          {/* <Route path={ROUTES.ACCOUNT} component={AccountPage} /> */}
          {/* <Route path={ROUTES.ADMIN} component={AdminPage} /> */}
        </div>
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
