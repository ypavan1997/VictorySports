import React from 'react'
import { Header, Button, Image, Table } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import _ from "lodash";
import {createNotification} from "../utils/utils";

class ScoringBoard extends React.Component {

    state = {
        score: [],
        finalScores : []
    };

    handleChange = (e, { detailId, index }) => {
        let score = this.state.score;
        score[index] = e.target.value;
        let finalScores = this.state.finalScores;
        finalScores[index] = {
            activityDetailId: detailId,
            score: e.target.value
        };
        this.setState({score: score, finalScores: finalScores});
    }

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

                    {_.map(activity.detail, (detail, i) =>

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
                                <Form.Input name={'score'} value={this.state.score[i]} onChange={ (e) => this.handleChange(e, {detailId:detail.id, index: i}) }/>
                            </Form.Field></Table.Cell>
                        </Table.Row>
                    )}

                </Table.Body>

                <Table.Footer fullWidth>
                    <Table.Row>
                        <Table.HeaderCell />
                        <Table.HeaderCell colSpan='4'>
                            <Button floated='right' icon labelPosition='left' primary size='small' onClick={()=> {
                                this.setState({isLoading: true})
                                fetch("https://ohack.herokuapp.com/v1/victoryfoundation/activities/"+activity.id+"/updatescore",
                                    {
                                        method: 'POST',
                                        headers: {
                                            'Accept': 'application/json',
                                            'Content-Type': 'application/json',
                                        },
                                        body: JSON.stringify(this.state.finalScores)
                                    })
                                    .then(res =>  {
                                        if(res.status < 400 && res.status > 199) {
                                            createNotification('success', 'Score submitted');
                                        } else {
                                            createNotification('error', 'Could not add score, please try again')
                                        }
                                    });
                            }}>
                                <Icon name='paper plane outline' /> Submit Score</Button>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        );
    }
}

export default ScoringBoard
