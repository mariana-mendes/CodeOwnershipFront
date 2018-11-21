import React, { Component } from 'react';
import './Data.css';
import { Jumbotron, Button } from 'reactstrap';
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

        <Jumbotron>
          <h1 className="display-3">Hello, world!</h1>
          <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
          <p className="lead">
            <Button color="primary">Learn More</Button>
          </p>
      </Jumbotron>
      {/* <legend> Your Data goes here... </legend>
        <h2>
          <p>{data.lines_code}</p>
          <p>{data.name}</p>
          <p>{data.authors}</p>
        </h2>
        <button className='button' onClick={this.handleClick}>Click Me</button> */}
      
      </div>
    );
  }
}

export default Data;
