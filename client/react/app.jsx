'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Mui from 'material-ui';
//import {AllAlcoList} from 'AllAlcoList.jsx';
import TableDrink from './TableDrink.jsx';
import ListDrink from './ListDrink.jsx';
import {bindMethods} from 'service';
import {AddAlcoButton} from 'AddAlcoButton.jsx';
import LoginForm from 'login.jsx';
import Navigation from 'navigation.jsx';

class MyApp extends React.Component {
   constructor(props) {
       super(props);
       this.state = {
           logged: false,
           loginName: '',
           avatar:'',
           dataBase: 'https://alcolist.firebaseio.com/',
           ref: new Firebase('https://alcolist.firebaseio.com/'),
       };
       bindMethods(this, ['setLoggin','deleteLogin']);
   }
    setLoggin(data){
        return !!data? this.setState({loginName: data.displayName || data.username, avatar: data.profileImageURL, logged: true}) : null;
    }
    deleteLogin(){
        this.state.ref.unauth();
        return this.setState({loginName: '', logged: false})
    }
   componentDidMount() {}
   render() {
       return <div>
           {!this.state.logged ? <LoginForm  bd={this.state.dataBase}  loginAction={this.setLoggin}/>: <div>
               <Navigation logout={this.deleteLogin} avatar={this.state.avatar}/>
               <ListDrink dataBase={this.dataBase}/>
               <AddAlcoButton/>
           </div>}
       </div>;
   }
}

ReactDOM.render(<MyApp/>, document.getElementById("application"));



