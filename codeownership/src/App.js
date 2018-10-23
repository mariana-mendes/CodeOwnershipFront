import React, { Component } from 'react';
import Projeto from './Projeto/Projeto';
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
       <Projeto></Projeto>
       </div>
      </div>
     
    );
  }
}

export default App;
