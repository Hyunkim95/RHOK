import React, { Component } from 'react';
import { Card, Button, CardText } from 'reactstrap';

class Experiences extends Component {
  render() {
    return (
      <div>
        <Card block inverse style={this.props.style}}>
           <CardTitle>{this.props.header}</CardTitle>
         </Card>
      </div>
    );
  }
}

export default Experiences;
