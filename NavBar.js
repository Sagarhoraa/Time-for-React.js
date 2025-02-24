import React, { Component } from 'react'
import './NavBar.css';
import Grid from '@material-ui/core/Grid';
import insta_logo from '../../images/logoinsta.png'
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import find from '../../images/find.svg';
import react from '../../images/love.svg';
import  Avatar  from '@material-ui/core/Avatar';
import dp from '../../images/dp6.png';
class navbar extends Component {
  constructor(props) {
    super(props)
  
    this.state = { }
  }
  render() {
    return (
      <div>
        <div className='navbar__barContent'>
          <Grid container>
            <Grid item xs={2}></Grid>
            <Grid item xs={3}>
              <img src={insta_logo} className='navbar_logo' width='105px' alt='logo'/>
            </Grid>

            <Grid item xs={3}>
              <input text='text' className='navbar__searchBar' placeholder='Search'/>
            </Grid>

            <Grid item xs={3} style={{'display':'flex'}}>
              <img className='navbar__img' src={home} width='25px' alt='home'/>
              <img className='navbar__img' src={message} width='25px' alt='home'/>
              <img className='navbar__img' src={find} width='25px' alt='home'/>
              <img className='navbar__img' src={react} width='25px' alt='home'/>
              <Avatar src={dp} className='navbar__img' style={{'maxHeight':'25px','maxWidth':'25px'}}/>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          
        </div>
      </div>
    );
  }
}

export default navbar;