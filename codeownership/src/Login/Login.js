import React, { Component } from 'react';
import { Container, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import fire from '../Firebase/Firebase';
import firebase from 'firebase'
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.singup = this.singup.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChangePassword = event => {
    this.setState({ password: event.target.value });
  }

  handleChangeEmail = event => {
    this.setState({ email: event.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    })
  }

  singup(e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      axios.post('http://localhost:4000/user', this.state)
    }).catch((error) => {
    })
  }


  render() {
    return (
      <Container className="App">
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input onChange={this.handleChangeEmail}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input onChange={this.handleChangePassword}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={this.login}> Login</Button>
          <Button onClick={this.singup} > Singup</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
