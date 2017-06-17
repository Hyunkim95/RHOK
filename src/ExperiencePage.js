import React, { Component } from 'react';
import Experiences from './Experiences';
import { Card, Button, CardTitle, Row, Col, Container } from 'reactstrap';


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

        <Container className="text-center">
          <h1>How do you want to feel?</h1>
          <p>Create your experiences</p>
        </Container>

        <Container>
          <Row>

          <Experiences
            header="Brave"
            style={this.cardStyle('red', 'red')}
          />

          <Experiences
            header="Relaxed"
            style={this.cardStyle('blue', 'blue')}
          />
          </Row>

          <div className="spacer"></div>

          <Row>
          <Experiences
            header="Positive"
            style={this.cardStyle('yellow', 'yellow')}
          />

          <Experiences
            header="Inquisitive"
            style={this.cardStyle('green', 'green')}
          />
          </Row>
        </Container>
      </div>
    );
  }
}

export default ExperiencePage;
