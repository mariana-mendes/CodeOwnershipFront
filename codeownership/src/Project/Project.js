import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import Data from '../Data/Data';

import './Project.css';

class Project extends Component {
  render() {
    return (
      <div className="Project">
     Your project goes here... 

<section>
  <section>
    <Data></Data>
  </section>
  <section>
    <Metric></Metric>
  </section>
</section>


<body>



</body>
      </div>
    );
  }
}

export default Project;
