'use strict';
import React from 'react';
import mui from 'material-ui';
import Firebase from 'firebase';
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

export class AllAlcoList extends React.Component {
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

class Drink extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        let drinkList = null;
        if (this.props.drink !== null) {
            drinkList = _.values(this.props.drink).map((drink, i)=> {
                return (
                    <DrinkItem drinkItem={drink} key={i}/>
                )
            })
        }
        return (
            <List subheader={this.props.header} insetSubheader={true} >
                {drinkList}
            </List>
        )
    }
}

class DrinkItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <ListItem
                leftAvatar={<Avatar icon={<SocialPeople />} />}
                rightAvatar={<Avatar>4</Avatar>}
                primaryText={this.props.drinkItem}
                secondaryText="Jan 9, 2016" />
        )
    }
}