import React, { Component } from 'react'

class GoodRobot extends Component{
  render(){
    return(
      <React.Fragment>
        <h3>Good Robot</h3>
        <p>I hear you saying: { this.props.userInput }</p>
      </React.Fragment>
    )
  }
}
export default GoodRobot
