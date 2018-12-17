import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProjectItem extends Component {
  render() {
    return (
            <tr>
                <td><Link to={{pathname:`/project/${this.props.project._id}`}}>{this.props.project.name}</Link></td>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
    );
  }
}

export default ProjectItem;
