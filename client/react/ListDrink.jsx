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
            listDrinks: null
        }
    }

    loadDataFromFirebase() {
        return new Promise((resolve, resject) => {
            firebaseRef.once("value", (data)=> {
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
        var drinkNodes = _(this.state.listDrinks)
            .keys()
            .map((k, i) => {
                let drink = this.state.listDrinks[k];
                console.log(drink)
                return (
                    <Drink drink={drink} key={i}/>
                )
            })
            .value();
        console.log(drinkNodes);

        return(
                <Card>
                    <Drink />
                    <Divider inset={true} />
                </Card>
        )
    }
}

module.exports = ListDrink;