import React, { Component } from 'react';
import Project from './Project/Project';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
      <div>
      <head>

</head>
<body>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

<div class="sidenav">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" class="avatar"></img>
  <a href="#about">Profile</a>
  <a href="#services">Projects</a>
  <a href="#services">Log out</a>

  
</div>
     
</body>


 <div class="header">
  <h2>Blog Name</h2>
</div>



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
