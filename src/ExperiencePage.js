import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import { Card, Button, CardTitle, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './ExperiencePage.css';

class ExperiencePage extends Component {
  constructor() {
    super()
    this.state = {
      modal: false
    };
    this.cardStyle.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   this.setState({
     modal: !this.state.modal
   });
 }


  cardStyle(color, border) {
    return (
      {
      'backgroundColor': color,
      'borderColor': border
      }
    )
  }

  render() {
    return (
      <div>

        <Navigation />

        <div className="spacer"></div>

        <Container className="text-center">
          <h1>Activity Builder</h1>
          <p>Start by choosing the experience you'd like to have. We'll suggest activities for you to achieve your goal.</p>
        </Container>

        <Container>
          <Row>

          <Experiences
            header="Bold"
            style={this.cardStyle('#F95272', '#F95272')}
          />

          <Experiences
            onclick={this.toggle}
            header="Relaxed"
            style={this.cardStyle('#8FDAFD', '#8FDAFD')}
          />

        <Modal isOpen={this.state.modal} toggle={this.toggle} className="modalRelaxed">
            <ModalHeader toggle={this.toggle}>Relaxed</ModalHeader>
            <ModalBody>
            Take time out for yourself to relax
            </ModalBody>
            <ModalFooter>
              <Button
                className="rounded-button button-blue"
                color="primary"
                onClick={this.toggle}>Start To Build
              </Button>{' '}
            </ModalFooter>
          </Modal>

          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Positive"
            style={this.cardStyle('#F1E484', '#F1E484')}
          />

          <Experiences
            header="Inquisitive"
            style={this.cardStyle('#2ABBB3', '#2ABBB3')}
          />
          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Positive"
            style={this.cardStyle('#F1E484', '#F1E484')}
          />

          <Experiences
            header="Inquisitive"
            style={this.cardStyle('#2ABBB3', '#2ABBB3')}
          />
          </Row>

          <div className="spacer"></div>
        </Container>

        <BottomNav />

      </div>
    );
  }
}

export default ExperiencePage;
