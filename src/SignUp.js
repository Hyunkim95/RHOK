import React, { Component } from 'react';
import style from './SignUp.css'
import { Container, Button, Form, FormGroup, Input, FormText} from 'reactstrap';


class SignUp extends Component {
  render() {
    return (
        <Container className="text-center">
          <img src="" alt=""/>
          <Button
            className="rounded-button"
            outline
            color="primary"
            size="lg" block
            >
            SIGN UP WITH FACEBOOK
          </Button>
          <h2>OR</h2>
          <FormGroup>
            <Input type="username" name="username" placeholder="USER NAME" />
          </FormGroup>
          <FormGroup>
            <Input type="password" name="password" placeholder="PASSWORD" />
          </FormGroup>
          <Button
            className="rounded-button"
            color="primary"
            size="lg" block
            >
            Sign Up
          </Button>
          <p>Already have an account? Log In</p>
        </Container>
    );
  }
}

export default SignUp;
