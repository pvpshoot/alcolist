'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import bindMethods from 'service';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import 'style.scss'


 class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //bindMethods(this, ['']);
    }
    componentDidMount() {}
    render() {
        return (
            <div className="loginForm">
                <h1>Авторизация</h1>
                <div className="loginForm__item">
                    <TextField
                      hintText="логин"
                      style={{
                        width: '100%',
                      }} />
                </div>
                <div className="loginForm__item">
                    <TextField
                      hintText="пароль"
                      floatingLabelText="пароль"
                      type="password"
                      style={{
                        width: '100%',
                      }}  />
                </div>
                <div className="loginForm__item">
                    <RaisedButton label="Войти" primary={true} />
                </div>
            </div>
            );
    }
}

ReactDOM.render(<LoginForm />, document.body);
