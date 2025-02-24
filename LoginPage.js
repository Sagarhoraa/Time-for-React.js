import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import inst_image from '../../images/9364675fb26a.svg';
import inst_logo from '../../images/logoinsta.png';
import fb from '../../images/fb.png';
import './LoginPage.css'; 
import appstore from '../../images/app.png';
import playstore from '../../images/play.png';

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state ={ }
    }
    render() {
        return(
            <div> 
                <Grid container>
                    <Grid item xs={3}>
                        
                    </Grid>
                    <Grid item xs={6}>
                        <div className='loginpage__main'>
                                    <div>
                                             <img src={inst_image} width='450' alt='instagram_image'/>
                                    </div>    
                                    <div>                              
                                        <div className='loginpage_rightcomponent'>
                                            <img src={inst_logo} className='loginpage__logo' alt='instagram_logo'/>   
                                            <div className='loginpage__signin'>
                                                <input className='loginpage__text' type='text'placeholder='Phone number,email or username'/>
                                                <input className='loginpage__text' type='password'placeholder='Password'/>
                                                <button className='login__button' >Sign In </button>
                                           </div>    

                                            <div className='login__ordiv'>
                                                <div className='login__divider'></div>
                                                <div className='login__or'>OR</div>
                                                <div className='login__divider'></div>
                                            </div>
                                            <div className='login__fb'>
                                                <img src={fb} width='15px'alt='facebook-icon'style={{'marginRight':'5px'}}/>Log in with Facebook</div>   
                                                <div className='login__forget'>Forget Password</div>       
                                        </div>  

                                        <div className='loginpage__signupoption'>
                                            <div className='loginPage__signin'>
                                                 Don't have an Account ? Sign Up
                                            </div>

                                            <div className='loginPage__downloadSection'>
                                                <div>  
                                                     Get the app.
                                                </div>
                                       
                                                 <div className='loginPage__option'>
                                                <img  className ='loginPage_dwimg' src={appstore}  alt='appstore' width='136px'/>
                                                <img  className ='loginPage_dwimg' src={playstore} alt='playstore' width='136px'/>
                                                </div> 
                                            </div>  
                                        </div>
                                    </div>                      
                        </div>                   
                    </Grid>
                    <Grid item xs={3}> 
                        
                    </Grid>
                </Grid>
            </div>
        )
    }
}
export default LoginPage;