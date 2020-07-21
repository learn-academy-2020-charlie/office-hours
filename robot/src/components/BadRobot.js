import React, { Component } from 'react'

class BadRobot extends Component{

  badListening = (input) => {
    let badArray = input.split("").map((value, index) => {
      if(index%3 === 0){
        return "B"
      } else if(index%3 === 1){
        return "L"
      } else if(index%3 === 2){
        return "A"
      }
    })
    return badArray.join("")
  }


  render(){
    return(
      <React.Fragment>
        <h3>Bad Robot</h3>
        <p> I hear you saying: { this.badListening(this.props.userInput) }</p>
      </React.Fragment>
    )
  }
}
export default BadRobot
