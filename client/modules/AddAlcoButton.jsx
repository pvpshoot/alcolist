'use strict';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import React from 'react';
import Dialog from 'material-ui/lib/dialog';
import ActionAdd from 'material-ui/lib/svg-icons/content/add';
import FlatButton from 'material-ui/lib/flat-button';
import Colors from 'material-ui/lib/styles/colors';
import {bindMethods} from 'service'

// Стандартный метод onTouchTap не работает без подключения библиотеки react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

export class AddAlcoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
        //bindMethods(this, ['']);
    }

    handleOpen(){
        this.setState({open: true});
    }

    handleClose(){
        this.setState({open: false});
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
                <Dialog
                    title="Dialog With Actions"
                    actions={actions}
                    modal={true}
                    open={this.state.open}>
                    Only actions can close this dialog.
                </Dialog>
            </div>
        )
    }
}