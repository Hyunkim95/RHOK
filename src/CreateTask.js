import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import FaPlus from 'react-icons/lib/fa/plus';
import FaArrowDown from 'react-icons/lib/fa/arrow-down';
import Banner from './Banner';
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

          <div className="spacer-small"></div>

          <FormGroup className="no-wrap">
            <Input className="activity-input" type="activity" name="activity" id="activity" placeholder="Add your own activity" />
            <Button
              color="primary"
              className="circle-button"
              >
                <FaPlus />
              </Button>
          </FormGroup>

          <div className="spacer"></div>

        <div className="text-center">
          <p>Set reminder frequency</p>
        </div>

        <div className="sorting">
          <div className="sort right"><label>
              <select>
              <option value="daily">DAILY</option>
              <option value="weekly">WEEKLY</option>
              <option value="monthly">MONTHLY</option>
              </select>
              <span className="pointer"><FaArrowDown/></span>
              </label>
            </div>
        </div>

        <div className="spacer"></div>

        <Button
          className="rounded-button"
          color="primary"
          size="lg"
          block
          >
          Create
        </Button>

        </Container>

        <BottomNav />

      </div>
    );
  }
}

export default ExperiencePage;
