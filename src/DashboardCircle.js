import React, { Component } from 'react';
import { Card, CardTitle, Col } from 'reactstrap';
import style from './DashboardCircle.css'

class DashboardCircle extends Component {
  render() {
    return (
      <Col sm="6">
        <Card
          onClick={this.props.onclick}
          block inverse style={this.props.style}
          className={this.props.classname}
        >
           <CardTitle
             style={this.props.fontStyle}
           >
               {this.props.header}
           </CardTitle>
        </Card>
       </Col>
    );
  }
}

export default DashboardCircle;
