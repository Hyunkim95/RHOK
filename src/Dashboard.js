import React, { Component } from 'react';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import DashboardCircle from './DashboardCircle';
import Banner from './Banner';
import FaPoints from 'react-icons/lib/fa/star';
import FaBoost from 'react-icons/lib/fa/rocket';
import { Button, Card, CardText, CardTitle, CardBlock, CardImg, Row, Col, Container, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import style from './Dashboard.css';

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      points: 0,
      modal: false,
      doneColor: false,
    }
    this.cardStyle.bind(this);
    this.fontStyle.bind(this);
    this.toggle = this.toggle.bind(this);
    this.addPoints = this.addPoints.bind(this);
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
      'borderColor': border,
      }
    )
  }

  fontStyle(textColor) {
    return (
      {
      'color': textColor,
      }
    )
  }

  addPoints() {
    var points = this.state.points + 10

    this.setState({
      modal: !this.state.modal,
      points: points,
      doneColor: true,
    })
  }

  render() {
    return (
      <div>

        <Navigation />

        <Banner />

        <div className="spacer-small"></div>

        <Col>
          <Row >
            <div>
              <p className="pointsLogo"><FaPoints /> {this.state.points} points</p>
            </div>

            <div>
              <p className="boostLogo"><FaBoost /> Boosts</p>
            </div>
          </Row>
        </Col>

        <Container className="text-center">
          <h5>Relax - Earn Points</h5>
        </Container>

      <Container>
        <Row>
          <DashboardCircle
            classname="circle-dashboard paintingCircle"
            header="Painting"
            style={this.cardStyle('', '#79A4FB')}
            fontStyle={this.fontStyle('#79A4FB')}
          />

          <DashboardCircle
            id=""
            onclick={this.toggle}
            classname="circle-dashboard yogaCircle"
            header="Yoga"
            style={this.cardStyle('', '#F3A24A')}
            fontStyle={this.fontStyle('#F3A24A')}
          />

          <Modal isOpen={this.state.modal} toggle={this.toggle} className="modalRelaxed">

            <ModalBody>
              <Card
                onClick={this.props.onclick}
                block inverse style={this.props.style}
              >
                <CardBlock>
                  <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                  <CardTitle className="blackFontTitle">Yoga</CardTitle>
                <CardText className="blackFontText">How do you feel?</CardText>
                </CardBlock>
              </Card>
            </ModalBody>

            <ModalFooter className="modalButton">
              <Button
                className="rounded-button button-orange "
                size="lg" block
                color="primary"
                onClick={(i) => this.addPoints()}>Complete +10 Pts <FaPoints />
              </Button>{' '}
            </ModalFooter>

            </Modal>

        </Row>

        <div className="spacer-small"></div>

        <Row>
          <DashboardCircle
            classname="circle-dashboard cookingCircle"
            header="Cooking"
            style={this.cardStyle('', '#50A344')}
            fontStyle={this.fontStyle('#50A344')}
          />

          <DashboardCircle
            classname="circle-dashboard moreCircle"
            header="Add More +"
            style={this.cardStyle('', '#8C8C8C')}
            fontStyle={this.fontStyle('#8C8C8C')}
          />
        </Row>
      </Container>

        <BottomNav />
      </div>
    )
  }
}

export default Dashboard;
