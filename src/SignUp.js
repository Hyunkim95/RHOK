import React, { Component } from 'react';
import style from './SignUp.css';
import { Container, Button, Form, FormGroup, Input, FormText} from 'reactstrap';


class SignUp extends Component {
  render() {
    return (
        <Container className="text-center">
          <img className="logo" src={require('./images/logo.png')} alt=""/>
          <Button
            className="rounded-button"
            outline
            color="primary"
            size="lg" block
            >
            SIGN UP WITH FACEBOOK
          </Button>
          <div className="spacer"></div>
          <h4>OR</h4>
          <div className="spacer"></div>
          <FormGroup>
            <Input className= "bottom-border-input" type="username" name="username" placeholder="USER NAME" />
          </FormGroup>
          <FormGroup>
            <Input className= "bottom-border-input" type="password" name="password" placeholder="PASSWORD" />
          </FormGroup>
          <div className="spacer"></div>
          <Button
            className="rounded-button"
            color="primary"
            size="lg"
            block
            >
            Sign Up
          </Button>
          <br/>
          <p>Already have an account? Log In</p>
          <div className="spacer"></div>
        </Container>
    );
  }
}

export default SignUp;
