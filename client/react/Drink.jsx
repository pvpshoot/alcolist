import React from 'react';
import mui from 'material-ui';
import DrinkItem from './DrinkItem.jsx';


var {
    List
    } = mui;

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

module.exports = Drink;