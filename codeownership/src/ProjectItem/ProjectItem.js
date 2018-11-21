import React, { Component } from 'react';
import Project from '../Project/Project';
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class ProjectItem extends Component {

  constructor(){
      super();
      this.handleClick = this.handleClick.bind(this, {});
      this.state ={showProject: false}
  }
  
  handleClick(t, project){
      console.log(project._id);
      this.setState({showProject:true});
      console.log(this.state.showProject);
  }
  
  render() {
    return (
        <Router>
            <div>
            <Link to="/project/id">
            <tr onClick={this.handleClick.bind(this, this.props.project)} className="ProjectItem">
                <th scope="row">1</th>
                <td>{this.props.project.name}</td>
            
            </tr>
            </Link>
            <Route path="/project/:_id" render={Project} ></Route>
            
            </div>
        </Router>
    );

    function Project({ match }) {
        console.log(match.params._id);
        return(
             <h1>Hello {match.params.name}!</h1>
        );
     }
  }
}

export default ProjectItem;
