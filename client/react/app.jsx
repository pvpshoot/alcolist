'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
//import {AllAlcoList} from 'AllAlcoList.jsx';
import TableDrink from './TableDrink.jsx';
import ListDrink from './ListDrink.jsx';
import {bindMethods} from 'service';
import {AddAlcoButton} from 'AddAlcoButton.jsx';
import LoginForm from 'login.jsx'


class MyApp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           logged: false,
           loginName: '',
           dataBase: 'https://alcolist.firebaseio.com/',
       };
       bindMethods(this, ['setLoggin']);
   }
    setLoggin(data){
        return !!data? this.setState({loginName: data, logged: true}) : null;
    }
   componentDidMount() {}
   render() {

       return <div>
           {!this.state.logged ? <LoginForm  bd={this.state.dataBase} loginAction={this.setLoggin}/>: <div>
               <ListDrink dataBase={this.dataBase}/>
               <AddAlcoButton/>
           </div>}
       </div>;
   }
}

ReactDOM.render(<MyApp/>, document.getElementById("application"));



