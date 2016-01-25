'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
import TableDrink from './TableDrink.jsx';
import ListDrink from './ListDrink.jsx';
import bindMethods from 'service';
import {AddAlcoButton} from 'AddAlcoButton.jsx';
import LoginForm from 'login.jsx'


class MyApp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           logged: false,
           dataBase: new Firebase('https://alcolist.firebaseio.com/'),
       };
       //bindMethods(this, ['']);
   }
   componentDidMount() {}
   render() {

       return <div>
           {!this.state.logged ? <LoginForm/>: <div>
               <ListDrink dataBase={this.dataBase}/>
               <AddAlcoButton/>
           </div>}
       </div>;

   }
}

ReactDOM.render(<MyApp/>, document.getElementById("application"));



