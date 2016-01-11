'use strict';
import React from 'react';
import mui from 'material-ui';
import ActionInfo from 'material-ui/lib/svg-icons/action/info';
import SocialPeople from 'material-ui/lib/svg-icons/social/people';
import Colors from 'material-ui/lib/styles/colors';


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
    }
    render() {
        return(
                <Card>
                    <List subheader="BEER" insetSubheader={true} >
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialPeople />} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Мохнатый шмель"
                            secondaryText="Jan 9, 2016" />
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialPeople />} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Балтика №9"
                            secondaryText="Jan 10, 2016" />
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialPeople />} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Клинское"
                            secondaryText="Jan 7, 2016" />
                    </List>
                    <Divider inset={true} />
                    <List subheader="COCTAIL" insetSubheader={true}>
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialPeople />} backgroundColor={Colors.blue500} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Vacation itinerary"
                            secondaryText="Jan 20, 2014" />
                        <ListItem
                            leftAvatar={<Avatar icon={<SocialPeople />} backgroundColor={Colors.yellow600} />}
                            rightIcon={<ActionInfo />}
                            primaryText="Kitchen remodel"
                            secondaryText="Jan 10, 2014" />
                    </List>
                </Card>


        )
    }
}

module.exports = ListDrink;