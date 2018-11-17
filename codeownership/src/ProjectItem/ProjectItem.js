import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class ProjectItem extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this, {});
      this.state ={showProject: false}
  }
  
  handleClick(t, project){
      console.log(this.props)
      console.log(project._id);
  }
  
  render() {
    let showProject = this.state.showProject;
    return (
      <tr onClick={this.handleClick.bind(this, this.props.project)} className="ProjectItem">
           <th scope="row">1</th>
            <td>{this.props.project.name}</td>
            <td>Otto</td>
            <td>@mdo</td>
      </tr>

    );
  }
}

export default ProjectItem;
