import React, { Component } from 'react';
import './App.css'
import Light from './Light'
import User from './User'

class App extends Component {
  constructor() {
    super()
    this.state = {
      lightArray: []
    }
  }

  addLightBulb = () => {
    let { lightArray } = this.state
    lightArray.push(<Light />)
    this.setState({ lightArray: lightArray })
  }

  removeLightBulb = () => {
    let { lightArray } = this.state
    lightArray.pop(<Light />)
    this.setState({ lightArray: lightArray })
  }

  render() {
    let { lightArray } = this.state

    return (
        <div>
          <button onClick={ this.addLightBulb }> Add bulb </button>
          <button onClick={ this.removeLightBulb }> Remove bulb </button>

          <div>
            { lightArray }
          </div>
        </div>
    );
  }
}

export default App;
