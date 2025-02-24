import React, { Component } from 'react';
import  './StatusBar.css';
import  Avatar  from '@material-ui/core/Avatar';
import statusimg from '../../images/pp2.png';

class StatusBar extends Component {
    constructor(props) {
      super(props)
    
      this.state = { }
    }
  render() {
    return (
      <div>
        <div className='statusbar__container'>
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

            
            <div className='status'>
                <Avatar className='statusbar_status' src={statusimg}></Avatar>
                <div className='statusbar_text'>Sagar</div>
            </div>

        </div>
    </div>
    )
  }
}

export default StatusBar