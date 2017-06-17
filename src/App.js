import React, { Component } from 'react';
import logo from './logo.svg';
import Homepage from './Homepage';
import SignUp from './SignUp';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Homepage}/>
            <Route path="/signuppage" component={SignUp}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
