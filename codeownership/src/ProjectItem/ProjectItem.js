import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class ProjectItem extends Component {
  render() {
    return (
      <li className="ProjectItem">
          <strong>Project: </strong> {this.props.project.name}
      </li>
    );
  }
}

export default ProjectItem;
