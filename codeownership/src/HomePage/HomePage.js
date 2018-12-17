import React, { Component } from 'react';
import fire from '../Firebase/Firebase';
import Projects from '../Projects/Projects';
import Project from '../Project/Project';
import Route from 'react-router-dom/Route';
import axios from 'axios';
import { BrowserRouter as Router, Link } from 'react-router-dom';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
        this.logout = this.logout.bind(this);
    }

    logout() {
        fire.auth().signOut();
    }

    componentDidMount() {
        axios.get('http://localhost:4000/project')
            .then(response => {
                console.log(response);
                this.setState({ projects: response.data })
            })
    }

    render() {
        return (
            <Router>
                <div>
                    <div className="sidenav">
                        <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar"></img>
                        <a href="#" >Profile</a>
                        <Link to="/projects" onClick={this.handleClick} >Projects</Link>
                        <a href="#" onClick={this.logout} >Log out</a>

                    </div>
                    <Route path="/project/:_id" component={Project} />,
                        <Route path="/projects" exact strict render={() =>
                        (<Projects projects={this.state.projects} />)} />
                </div>

            </Router>
        );
    }
}

export default HomePage;