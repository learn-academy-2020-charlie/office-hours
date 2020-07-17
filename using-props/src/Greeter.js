import React, { Component } from 'react';

export default class Greeter extends Component {
  // *** DUMB COMPONENT *******************************************************

  // this.props = {
  //   name: "Raisins",
  //   index: 1,
  //   returnIndex: returnIndex()
  // }

  sendIndex = () => {
    this.props.returnIndex(this.props.index)
  }

  render() {
    return(
      <>
        <div onClick={ this.sendIndex }>
          { this.props.name }
        </div>
      </>
    )
  }
}
