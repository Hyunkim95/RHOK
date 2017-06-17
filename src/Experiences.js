import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import style from './ExperiencePage.css'

class Experiences extends Component {
  render() {
    return (
      <Col sm="6">
        <Card
          block inverse style={this.props.style}
          className="circle"
        >
           <CardTitle>{this.props.header}</CardTitle>
        </Card>
       </Col>
    );
  }
}

export default Experiences;
