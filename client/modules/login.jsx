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
            ref: new Firebase(this.props.bd)
        };
        bindMethods(this, ['twitterLogin','checkLogged','facebookLogin']);
    }
    

    componentDidMount() {
        this.checkLogged();
    }
    checkLogged(){
        let authData = this.state.ref.getAuth();
        return authData? this.props.loginAction(authData.twitter.username) : null;
    }
    twitterLogin(e){
        e.preventDefault();
        this.state.ref.authWithOAuthPopup("twitter", (error, authData)=> {
            if (error) {
                alert('Error');
                console.log("Login Failed!", error);
            } else {
                this.props.loginAction(authData.twitter.username);
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
                this.props.loginAction(authData.facebook.displayName);
            }
            return
        });
    }

    render() {
        return (
            <div className="loginForm">
                <h1 className="loginForm__header">Alco list <br/>
                    <small>поделись с друзьями своими гастрономическими вкусами</small>
                </h1>
                <div className="loginForm__item">
                    <RaisedButton onClick={this.twitterLogin} 
                        label="Twitter"
                                  backgroundColor="#0084B4"
                                  style={{
                        width: '200px',
                        marginBottom: '20px',
                     }}
                                  primary={true}/>
                </div>
                <div className="loginForm__item">
                    <RaisedButton label="Facebook" onClick={this.facebookLogin}
                                  backgroundColor="#4e69a2"
                                  style={{
                        width: '200px'
                      }}
                                  primary={true}/>
                </div>
            </div>
        );
    }
}
