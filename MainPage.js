import React, { Component } from 'react';
import './Mainpage.css';
import Post from '../Post/Post';

class MainPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = { }
    }
  render() {
    return (
      <div>
        <Post/>
      </div>
    )
  }
}

export default MainPage