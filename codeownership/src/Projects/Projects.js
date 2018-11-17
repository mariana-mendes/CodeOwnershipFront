import React, { Component } from 'react';
import Metric from '../Metric/Metric';
import Data from '../Data/Data';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Jumbotron, Button } from 'reactstrap';
import './Projects.css';

class Projects extends Component {

  render() {
    let projectItems;
    if(this.props.projects){
      projectItems = this.props.projects.map( project => {
        return(
          <ProjectItem  key={project._id} project={project}/>
        );
      })
    };
    return (
      <div className="Projects">
       <Jumbotron>
        {projectItems}
      </Jumbotron>>
      <Data></Data>
      <Metric></Metric>
      </div>
    );
  }
}

export default Projects;
