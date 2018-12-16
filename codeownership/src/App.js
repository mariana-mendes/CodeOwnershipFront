import React, { Component } from 'react';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
import axios from 'axios';
import './App.css';
import fire from './Firebase/Firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      projects: [],
      user: undefined
    };
    this.authListener = this.authListener.bind(this);
  }
  authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    })
  }


  componentDidMount() {
    this.authListener();
  }

  componentWillMount() {
    axios.get('http://localhost:4000/user')
      .then(response => {
        this.setState({ projects: response.data })
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.user ? (<HomePage />) : (<Login />)}
      </div>
    );
  }

}

export default App;
