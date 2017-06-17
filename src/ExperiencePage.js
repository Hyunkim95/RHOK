import React, { Component } from 'react';
import Experiences from './Experiences';
import Navigation from './Navigation'
import { Card, Button, CardTitle, Row, Col, Container } from 'reactstrap';
import style from './ExperiencePage.css'

class ExperiencePage extends Component {
  constructor() {
    super()
    this.state = {

    }
    this.cardStyle.bind(this)
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
            header="Relaxed"
            style={this.cardStyle('#8FDAFD', '#8FDAFD')}
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
        </Container>
      </div>
    );
  }
}

export default ExperiencePage;
