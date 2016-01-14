import React from 'react';
import mui from 'material-ui';
import SocialPeople from 'material-ui/lib/svg-icons/social/people';

var {
    List,
    ListItem,
    Avatar
    } = mui;

class Drink extends React.Component {
    constructor(){
        super()
    }

    render() {

        return (
            <List subheader="BEER" insetSubheader={true} >
                <ListItem
                    leftAvatar={<Avatar icon={<SocialPeople />} />}
                    rightAvatar={<Avatar>4</Avatar>}
                    primaryText="Мохнатый шмель"
                    secondaryText="Jan 9, 2016" />
            </List>
        )
    }
}

module.exports = Drink;