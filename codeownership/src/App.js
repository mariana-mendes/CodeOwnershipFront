import React, { Component } from 'react';
import Project from './Project/Project';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <h2>Nome do usuário</h2>
      </div>

          {/* <User></User> */}
          
        <div>
       <Project></Project>
       </div>
      </div>
     
    );
  }
}

export default App;
