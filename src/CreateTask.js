import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import Banner from './Banner'
import { Badge, Card, FormGroup, Label, Input, FormText, Button, CardTitle, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './CreateTask.css';

class ExperiencePage extends Component {
  constructor() {
    super()

    this.state= {
      clicked: false,
      activities: ['YOGA', 'MEDITATION', 'READING', 'WRITING', 'ART', 'DANCING']
    }

    this.clickedTrue = this.clickedTrue.bind(this)
  }

  clickedTrue(i){
      this.setState({
        clicked: i
      })
  }

  getStyles(i){
      return {
        backgroundColor: this.state.clicked == i ? "#33C2BC" : "transparent",
        color: this.state.clicked == i ? "white" : "#33C2BC"
      }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Banner />
        <Container>

          <div className="spacer-small"></div>

          <div className="intro-text text-center">
            <p>Introl text to go here telling users to select their activity</p>
          </div>

          <div className="pills">
            {this.state.activities.map((activity, i) =>
              <Badge id={i} onClick = {() => this.clickedTrue(i)} style={this.getStyles(i)} pill>
                <p>{activity}</p>
              </Badge>
            )}

          </div>

          <div className="spacer"></div>

          <FormGroup>
            <Input type="activity" name="activity" id="activity" placeholder="Add your own activity" />
          </FormGroup>

          <FormGroup>
            <Label for="exampleSelect">Set reminder frequency</Label>
            <Input type="select" name="select" id="exampleSelect">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input>
          </FormGroup>

        </Container>

        <BottomNav />

      </div>
    );
  }
}

export default ExperiencePage;
