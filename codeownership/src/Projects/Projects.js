import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Table } from  'react-bootstrap';
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
                <Table  dark="true" className="projects-table">
                        <thead>
                          <tr>
                            <th>Project Name</th>
                            <th>Data </th>
                            <th>Git</th>
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
