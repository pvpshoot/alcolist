'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import {bindMethods} from 'service';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import 'style.scss'



export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ref: new Firebase(this.props.bd), 
            loginSocial: true
        };
        bindMethods(this, ['twitterLogin','checkLogged','facebookLogin', 'switchLogin']);
    }
    
    switchLogin() {
      this.setState({loginSocial: !this.state.loginSocial})
    }

    componentDidMount() {
        this.checkLogged();
    }
    checkLogged(){
        let authData = this.state.ref.getAuth();
        console.log(authData);
        return authData? this.props.loginAction(authData.provider=='twitter'? authData.twitter : authData.facebook) : null;
        
    }
    twitterLogin(e){
        e.preventDefault();
        this.state.ref.authWithOAuthPopup("twitter", (error, authData)=> {
            if (error) {
                alert('Error');
                console.log("Login Failed!", error);
            } else {
                this.props.loginAction(authData.twitter);
                console.log(authData.twitter);
            }
            return
        });
    }
    facebookLogin(e){
        e.preventDefault();
        this.state.ref.authWithOAuthPopup("facebook", (error, authData)=> {
            if (error) {
                alert('Error');
                console.log("Login Failed!", error);
            } else {
                this.props.loginAction(authData.facebook);
            }
            return
        });
    }

    render() {
        return (
            <div className="loginForm">
                <div className='socialLogin'>
                  <h1 className="loginForm__header">Alco list <br/>
                      <small>вспомни, чем ты накидался</small>
                  </h1>
                  {
                    this.state.loginSocial ? 
                    <div className="loginForm__item">
                        <RaisedButton onClick={this.twitterLogin} 
                            label="Twitter"
                            backgroundColor="#0084B4"
                            style={{
                            width: '200px',
                            marginBottom: '20px',
                            }}
                            primary={true}/>

                    <div className="loginForm__item">
                        <RaisedButton  onClick={this.facebookLogin}
                            label="Facebook"
                            backgroundColor="#4e69a2"
                            style={{
                               width: '200px'
                            }}
                            primary={true}/>
                    </div>
                    </div> : 
                    <div>
                       <div className="loginForm__item">
                          <TextField floatingLabelText="email"/>
                       </div>
                       <div className="loginForm__item">
                          <TextField floatingLabelText="password"/>
                       </div>
                       <div className="loginForm__item">
                          <br />
                          <RaisedButton label="Войти" secondary={true} style={{margin: '12px'}} />
                          <RaisedButton label="Регистрация" secondary={true} style={{margin: '12px'}} />
                       </div>
                    </div>
                  }
                  <a href='#' className="change-login-metod" onClick={this.switchLogin}>{this.state.loginSocial ? <span>авторизация по логину и паролю</span> : <span>войти через соц. сети</span>}</a>
                </div>
            </div>

        );
    }
}
