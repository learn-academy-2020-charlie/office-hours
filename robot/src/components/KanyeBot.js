import React, { Component } from 'react'

class KanyeBot extends Component{

  kanyeListening = (input) => {
    return input.split("").map(value => {
      return "me "
    })
  }

  render(){
    return(
      <React.Fragment>
        <h3>Kayne Bot</h3>
        <p>I hear you saying: { this.kanyeListening(this.props.userInput) }</p>
      </React.Fragment>
    )
  }
}
export default KanyeBot
