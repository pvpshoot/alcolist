'use strict';
import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import IconButton from 'material-ui/lib/icon-button';
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close';
import Avatar from 'material-ui/lib/avatar';
import List from 'material-ui/lib/lists/list';
import ListItem from 'material-ui/lib/lists/list-item';
import FlatButton from 'material-ui/lib/flat-button';
import {bindMethods} from 'service';
export default class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //bindMethods(this, ['logout']);
    }

    componentDidMount() {
    }

    render() {
        return <AppBar
            zDepth={1}
            title="Моё бухлишко"
            iconElementLeft={<Avatar src={this.props.avatar} style={{marginTop: 4}}/>}
            iconElementRight={<FlatButton label="Logout" onClick={this.props.logout}/>}
        />;
    }
}