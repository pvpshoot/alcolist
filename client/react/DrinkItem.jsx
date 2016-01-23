import React from 'react';
import mui from 'material-ui';
import SocialPeople from 'material-ui/lib/svg-icons/social/people';

var {
    ListItem,
    Avatar
    } = mui;

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

module.exports = DrinkItem;