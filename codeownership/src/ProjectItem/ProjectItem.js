import React, { Component } from 'react';
import Project from '../Project/Project';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom';

class ProjectItem extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this, {});
      this.state ={showProject: false}
  }
  
  handleClick(t, project){
      this.setState({showProject:true});
  }
  
  render() {
    return (
            
            <tr onClick={this.handleClick.bind(this, this.props.project)} className="ProjectItem">
                <th scope="row">1</th>
                <Link to={{pathname:`/project/${this.props.project._id}`}}>{this.props.project.name}</Link>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        
       
    );
  }
}

export default ProjectItem;
