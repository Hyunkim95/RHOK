import React, { Component } from 'react';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import Banner from './Banner'

class Dashboard extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <Navigation />

        <Banner
        />

        <div className="spacer-small"></div>

        <div className="text-center">
          <p><strong>10 pts</strong></p>
        </div>

        <div className="text-center">
          <p>Completed Activities</p>
        </div>

        <BottomNav />
      </div>
    )
  }
}

export default Dashboard;
