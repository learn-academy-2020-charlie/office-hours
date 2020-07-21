import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    this.setState({ userInput: e.target.value })
  }

  render(){
    return(
      <React.Fragment>
        <h1>Here is the Robot App</h1>
        <input
          onChange={ this.handleChange }
          value={ this.state.userInput }
        />
        <GoodRobot userInput={ this.state.userInput } />
        <BadRobot userInput={ this.state.userInput } />
        <KanyeBot userInput={ this.state.userInput } />
      </React.Fragment>
    )
  }
}
export default App
