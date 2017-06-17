import React, { Component } from 'react';

class ExperiencePage extends Component {
  constructor(){
    super(props)
    this.state={

    }
    this.cardStyle.bind(this)
  }

  cardStyle(color, border) {
    return (
      backgroundColor: color,
      borderColor: border
    )
  }


  render() {
    return (
      <div>
        <Experiences
          header=""
          style={this.cardStyle(blue, blue)}
        />

        <Experiences
          header=""
        />

        <Experiences
          header=""
        />

        <Experiences
          header=""
        />
      </div>
    );
  }
}

export default ExperiencePage;
