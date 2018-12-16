import React from 'react'
import { Header, Button, Image, Table } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import _ from "lodash";
import HubActivityItems from "./HubActivityItems";

class ScoringBoard extends React.Component {

    render() {
        const {activity} = this.props;
       return (
            <Table basic='very' celled collapsing>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Activity</Table.HeaderCell>
                        <Table.HeaderCell>Score</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>

                    {_.map(activity.detail, detail =>

                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image>
                                    <Image src='/victory/matthew.png' rounded size='mini' />
                                    <Header.Content>
                                        {detail.actionType}
                                        <Header.Subheader>{detail.description}</Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </Table.Cell>
                            <Table.Cell><Form.Field>
                                <Form.Input name={'name'}/>
                            </Form.Field></Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small'>
                                <Icon name='paper plane outline' /> Submit Score</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }
}

export default ScoringBoard
