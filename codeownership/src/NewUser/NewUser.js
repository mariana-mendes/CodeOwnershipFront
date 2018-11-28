import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

class NewUser extends Component {
    constructor(){
        super();
        this.state = {
             email: undefined, password: undefined, name: undefined
        }
        this.submit = this.submit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
      }

    submit(){
            axios.post('http://localhost:4000/user', this.state)
    }

    handleChangeEmail = event => {
        this.setState({ email: event.target.value });
    }

    handleChangeName = event => {
        this.setState({name: event.target.value });
    }

    handleChangePassword = event => {
        this.setState({password: event.target.value });
    }

  render() {
    return ( 
        <Form>
             <FormGroup>
                <Label for="nome">Name</Label>
                <Input onChange={this.handleChangeName} name="name" id="name" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input onChange={this.handleChangeEmail} type="email" name="email" id="email" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input  onChange={this.handleChangePassword}  type="password" name="password" id="examplePassword" placeholder="password placeholder" />
            </FormGroup>
            <Button onClick={this.submit}> Submit</Button>
        </Form>
    );
  }
}



export default NewUser;
