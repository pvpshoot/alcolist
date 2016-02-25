'use strict';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';

import LeftNav from 'material-ui/lib/left-nav';
import MenuItem from 'material-ui/lib/menus/menu-item';
import TextField from 'material-ui/lib/text-field';

import ActionAdd from 'material-ui/lib/svg-icons/content/add';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import mui from 'material-ui'
import Firebase from 'firebase'
import {bindMethods} from 'service'

// Стандартный метод onTouchTap не работает без подключения библиотеки react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();


export class AddAlcoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: '',
            textField: ''
        };
        //bindMethods(this, ['']);
    }

    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
    }

    onChangeMessage(evt) {
        this.setState({
            message: evt.target.value
        })
    }

    onChangeTextField(evt) {
        this.setState({
            textField: evt.target.value
        })
    }

    onTouchStart(evt) {
        var firebaseRef = new Firebase('https://alcolist.firebaseio.com/users/' + this.props.id)
        return new Promise((resolve, reject) => {
            firebaseRef.push({
                message: this.state.message,
                textField: this.state.textField,
                date: new Date().toUTCString()
            })
            resolve();
            this.setState({
                message: '',
                textField: ''
            })
        });
    }

    componentDidMount() {}
    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                secondary={true}
                onTouchTap={this.handleClose.bind(this)} />,
            <FlatButton
                label="Submit"
                primary={true} />
        ];

         //TODO УБРАТЬ ИНЛАЙН СТИЛИ
        return (
            <div>
                <FloatingActionButton onTouchTap={this.handleOpen.bind(this)} backgroundColor={Colors.teal500} className="AddAlcoButton" style={{position: 'fixed', bottom:'20px', right:'60px'}}>
                    <ActionAdd/>
                </FloatingActionButton>
                <LeftNav
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={open => this.setState({open})}
                    >
                    <TextField
                        value={this.state.message}
                        onChange={this.onChangeMessage.bind(this)}
                        hintText="Hint Text"
                        /><br/>
                    <br/>
                    <TextField
                        value={this.state.textField}
                        onChange={this.onChangeTextField.bind(this)}
                        hintText="The hint text can be as long as you want, it will wrap."
                        /><br/>
                    <FlatButton
                        label="Отправить"
                        primary={true}
                        onTouchTap={this.onTouchStart.bind(this)}
                        />
                </LeftNav>
            </div>
        )
    }
}