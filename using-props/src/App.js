import React, { Component } from 'react';
import Greeter from './Greeter'
import './App.css';

export default class App extends Component {
  // *** SMART COMPONENT ****************************************************
  constructor(props) {
    super(props)
      this.state = {
        names: ["Raisins", "Ricky", "Jax"]
      }
  }

  returnIndex = (index) => {
    alert(index)
  }

  render() {
    let { names } = this.state
    let listOfNames = names.map((value, index) => {
      return(
        <Greeter
          name={ value }
          index={ index }
          returnIndex={ this.returnIndex }
        />
      )
    })
    return(
      <>
        <h1>Greet someone</h1>
        { listOfNames }
      </>
    )
  }
}
