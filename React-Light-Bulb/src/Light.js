import React, { Component } from 'react';
import offSwitch from './offSwitch.png'
import onSwitch from './onSwitch.png'
import onBulb from './onBulb.jpeg'
import offBulb from './offBulb.jpeg'

export default class Light extends Component {
    constructor(props){
        super(props)
            this.state = {
                light: "off",
                lightColor: "white",
                lightSwitch: offSwitch,
                lightBulb: offBulb
            }
    }

changeLight = () => {
    if(this.state.lightSwitch === offSwitch && this.state.lightBulb === offBulb){
        this.setState({ lightSwitch: onSwitch })
        this.setState({ lightBulb: onBulb })
    } else {
        this.setState({ lightSwitch: offSwitch })
        this.setState({ lightBulb: offBulb })
    }
}


  render() {
      const { lightSwitch } = this.state
      const { lightBulb } = this.state

    return (
        <div className="flex">
        <img src={ lightBulb }/>
        <img src={ lightSwitch } onClick = { this.changeLight }/>
        </div>

    );
  }
}
