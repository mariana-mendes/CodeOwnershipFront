import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Table } from 'react-bootstrap';
import SearchInput, { createFilter } from 'react-search-input'
import './Projects.css';

const KEYS_TO_FILTERS = ['name', 'subject']

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }


  render() {
    let projectItems = this.props.projects.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div className="Projects">
         <SearchInput className="search-input" onChange={this.searchUpdated} />
          <Table dark="true" className="projects-table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th>Authors </th>
                <th>Git</th>
              </tr>
            </thead>
            <tbody>
              {projectItems.map(proj => {
                return (
                  <ProjectItem key={proj._id} project={proj}>
                  </ProjectItem>
                )
              })}
            </tbody>
          </Table>
      </div>
    );
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
}


export default Projects;
