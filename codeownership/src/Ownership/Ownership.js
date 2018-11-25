import React, { Component } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';


class Ownership extends Component {
  render() {
    return (
      <div className="Ownership">
        <legend>... And Ownership of code </legend>
          <Jumbotron  >
            <li> 3 classes of test</li>
            <li> some metric </li>
        </Jumbotron>    
      </div>
    );
  }
}

export default Ownership;
