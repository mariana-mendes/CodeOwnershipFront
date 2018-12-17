import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import Data from '../Data/Data';
import Ownership from '../Ownership/Ownership';
import './Project.css';


class Project extends Component {
  state = {
      id: null
  }

  componentDidMount() {
      const { handle } = this.props.match.params
      fetch(`http://localhost:3000/project/${handle}`).then((id) => {
          this.setState(() => ({id}))
      })
  }
  
  render() {
    return (
      <div className="project">
        <Data></Data>
        <Metric></Metric>
        <Ownership></Ownership>
      </div>
    );
  }
}

export default Project;
