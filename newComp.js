import React, { Component } from 'react'

 class newComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message:"subscribe to my channel gta sagar!"
      };
    }
  render() {
    return (
      <div className='App'>
        <h3>{this.state.message}</h3>
        </div>
    )
  }
}

export default newComp;