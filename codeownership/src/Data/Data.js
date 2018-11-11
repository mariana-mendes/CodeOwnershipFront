import React, { Component } from 'react';
import './Data.css';
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
    const data = {
          lines_code: 312312,
          name: "Projeto de LP2",
          authors: ["Mariana","Jose", "Jurema"]
    }

    return (
      <div className="Data">
      <legend> Your Data goes here... </legend>
        <h2>
          <p>{data.lines_code}</p>
          <p>{data.name}</p>
          <p>{data.authors}</p>
        </h2>
        <button className='button' onClick={this.handleClick}>Click Me</button>
      
      </div>
    );
  }
}

export default Data;
