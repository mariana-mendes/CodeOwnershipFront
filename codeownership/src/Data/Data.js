import React, { Component } from 'react';
import './Data.css';
import { Jumbotron } from 'reactstrap';
import axios from 'axios';


class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  handleClick () {
    axios.get('https://api.github.com/users/maecapozzi')
      .then(response => console.log(response))
  }

  render() {

    return (
      <div className="Data">
          <legend>Some infos about this project... </legend>
        <Jumbotron  >
          <li> 13123,32 lines of code</li>
          <li> 123 classes </li>
        </Jumbotron>      
      </div>
    );
  }
}

export default Data;
