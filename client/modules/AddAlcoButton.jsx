'use strict';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import React from 'react';
import ActionAdd from 'material-ui/lib/svg-icons/content/add';
import Colors from 'material-ui/lib/styles/colors';

export class AddAlcoButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //bindMethods(this, ['']);
    }
    componentDidMount() {}
    render() {
         //TODO УБРАТЬ ИНЛАЙН СТИЛИ
        return <FloatingActionButton backgroundColor={Colors.teal500} className="AddAlcoButton" style={{position: 'fixed', bottom:'20px', right:'60px'}}>
            <ActionAdd />
        </FloatingActionButton>;
    }
}