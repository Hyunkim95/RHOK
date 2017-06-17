import React, { Component } from 'react';
import Navigation from './Navigation';
import BottomNav from './BottomNav';
import DashboardBanner from './DashboardBanner'

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

        <DashboardBanner
          title="Relaxed"
        />

        <BottomNav />
      </div>
    )
  }
}

export default Dashboard;
