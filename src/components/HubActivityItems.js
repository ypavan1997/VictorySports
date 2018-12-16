import React from 'react'
import { Item } from 'semantic-ui-react'
import {addCurrentActivity} from "../redux/actions/OpenActivityActions";
import connect from "react-redux/es/connect/connect";


class HubActivityItems extends React.Component {

    constructor(props) {
        super(props);
    }

    navigate = (e, {url, name, value, activity}) => {
        this.props.addActivity(activity);
        this.setState({activeItem: name});
        console.log('...', url);
        this.props.history.push(url || value)
    };

    render() {
        const {activity, activityDate} = this.props;
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src={"https://" + activity.coachImage}/>
                    <Item.Content>
                        <Item.Header as='a' onClick={() => this.navigate(null, {url: `/hub_score/${activity.hubId}/${activityDate.getFullYear()}-${(activityDate.getMonth()+1)}-${activityDate.getDate()}`, activity: activity})}>{activity.hubName}</Item.Header>
                        <Item.Meta>Activity in {activity.hubName} on {activityDate.getFullYear()}-{(activityDate.getMonth()+1)}-{activityDate.getDate()}</Item.Meta>
                        <Item.Description>
                            - by {activity.coachName}
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }

}

const mapDispatchToProps = dispatch => {
    return {
        addActivity: activity => dispatch(addCurrentActivity(activity))
    }
};

export default connect(
     null,
    mapDispatchToProps
)(HubActivityItems)
