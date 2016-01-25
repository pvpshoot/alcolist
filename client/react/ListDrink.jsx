'use strict';
import React from 'react';
import mui from 'material-ui';
import Firebase from 'firebase';
import Drink from './Drink.jsx';
import _ from 'lodash';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import SocialPeople from 'material-ui/lib/svg-icons/social/people';
import Colors from 'material-ui/lib/styles/colors';

let firebaseRef = new Firebase('https://alcolist.firebaseio.com/alcolist');


var {
    Card,
    List,
    ListItem,
    Divider,
    Avatar,
    } = mui;

class ListDrink extends React.Component {
    constructor(){
        super();
        this.state = {
            listDrinks: null,
            dataBase: `${this.props.dataBase}/alcolist`,
        }
    }

    loadDataFromFirebase() {
        return new Promise((resolve, resject) => {
            this.state.dataBase.once("value", (data)=> {
                var drinks = data.val();
                resolve(drinks)
                this.setState({listDrinks: drinks})
            })
        })
    }

    componentDidMount(){
        this.loadDataFromFirebase();
    }
    render() {
        if(this.state.listDrinks !== null){
            var groupped = _.groupBy(this.state.listDrinks, (n)=> {return [n.type].sort()})
              var nodes = _(groupped).keys().map((k, i) => {
                var nod = groupped[k].map((hit, j) => {
                    return hit.name
                })
                return (<Drink header={k} drink={nod} key={i}/>)
            }).value();
        }


        return(
                <Card>
                    {nodes}
                    <Divider inset={true} />
                </Card>
        )
    }
}

module.exports = ListDrink;