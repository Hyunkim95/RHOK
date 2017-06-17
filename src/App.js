import React, { Component } from 'react';
import Homepage from './Homepage';
import SignUp from './SignUp';
import ExperiencePage from './ExperiencePage';
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
            <Route path="/experiences" component={ExperiencePage}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
