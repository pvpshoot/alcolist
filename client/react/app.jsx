'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
//import {AllAlcoList} from 'AllAlcoList.jsx';
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
           <AddAlcoButton/>
       </div>;

   }
}

ReactDOM.render(<MyApp/>, document.getElementById("content"));



