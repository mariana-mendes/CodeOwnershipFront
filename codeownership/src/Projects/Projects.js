import React, { Component } from 'react';
// import Metric from '../Metric/Metric';
// import Data from '../Data/Data';
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Table } from 'reactstrap';
import './Projects.css';

class Projects extends Component {
 
  render() {
  
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map(project => {
      
        return(
          <ProjectItem  key={project._id} project={project}>
          </ProjectItem>
        );
      })
    };
    return (
      <div className="Projects">
       <Table dark>
        <thead>
          <tr>
            <th>Project Name</th>
          </tr>
        </thead>
        <tbody>
        {projectItems}
        </tbody>
        </Table>
      </div>
    );
  }
}

export default Projects;
