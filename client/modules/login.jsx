'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import bindMethods from 'service';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import 'style.scss'


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //bindMethods(this, ['']);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="loginForm">
                <h1 className="loginForm__header">Авторизация</h1>
                <div className="loginForm__item">
                    <RaisedButton label="Twitter"
                                  backgroundColor="#0084B4"
                                  style={{
                        width: '200px',
                        marginBottom: '20px'
                      }}
                                  primary={true}/>
                </div>
                <div className="loginForm__item">
                    <RaisedButton label="Facebook"
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
