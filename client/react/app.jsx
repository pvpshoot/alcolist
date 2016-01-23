'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import TableDrink from './TableDrink.jsx';
import ListDrink from './ListDrink.jsx';
import bindMethods from 'service';
import {AddAlcoButton} from 'AddAlcoButton.jsx';

class MyApp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {};
       //bindMethods(this, ['']);
   }
   componentDidMount() {}
   render() {

       return <div>
           <ListDrink/>
           <AddAlcoButton/>
       </div>;

   }
}

ReactDOM.render(<App/>, document.getElementById('application'));



