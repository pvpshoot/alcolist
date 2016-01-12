'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import bindMethods from 'service';
import {AddAlcoButton} from 'AddAlcoButton.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //bindMethods(this, ['']);
    }
    componentDidMount() {}
    render() {
        return  <AddAlcoButton/>;
    }
}

ReactDOM.render(<App/>, document.getElementById('application'));



