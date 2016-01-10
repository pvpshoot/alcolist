'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import TableDrink from './TableDrink.jsx';
import bindMethods from 'service';


class MyApp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {};
       //bindMethods(this, ['']);
   }
   componentDidMount() {}
   render() {

       return <TableDrink/>;

   }
}

ReactDOM.render(<MyApp/>, document.getElementById("content"));



