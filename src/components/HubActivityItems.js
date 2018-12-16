import React from 'react'
import { Item } from 'semantic-ui-react'


class HubActivityItems extends React.Component {

    constructor(props) {
        super(props);
    }

    navigate = (e, {url, name, value}) => {
        this.setState({activeItem: name});
        console.log('...', url);
        this.props.history.push(url || value)
    };

    render() {
        return (
            <Item.Group>
                <Item>
                    <Item.Image size='tiny' src='/images/wireframe/image.png'/>
                    <Item.Content>
                        <Item.Header as='a' onClick={() => this.navigate(null, {url: '/hub_score/21/12-12-2018'})}>Sholinganallur Hub</Item.Header>
                        <Item.Meta>Practice session on 12-Dec-2018</Item.Meta>
                        <Item.Description>
                            Session on football.
                        </Item.Description>
                    </Item.Content>
                </Item>
            </Item.Group>
        );
    }

}

export default HubActivityItems
