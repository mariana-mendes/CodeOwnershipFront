import React, { Component } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';

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
                <th><Link to={{pathname:`/project/${this.props.project._id}`}}>{this.props.project.name}</Link></th>
                <td>Otto</td>
                <td>@mdo</td>
            </tr>
        
       
    );
  }
}

export default ProjectItem;
