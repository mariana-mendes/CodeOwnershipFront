import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';


class Metric extends Component {
  render() {
    return (
      <div className="Metric">
          <legend>We have some Metrics to show </legend>
          <Jumbotron  >
            <li> 3 classes of test</li>
            <li> some metric </li>
        </Jumbotron>     
      
      </div>
    );
  }
}

export default Metric;
