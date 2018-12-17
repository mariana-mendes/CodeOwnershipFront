import React, { Component } from 'react';
import Login from './Login/Login';
import HomePage from './HomePage/HomePage';
import './App.css';
import fire from './Firebase/Firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: undefined
    }
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

  render() {
    return (
      <div className="App">
        {this.state.user ? (<HomePage/>) : (<Login />)}
      </div>
    );
  }

}

export default App;
