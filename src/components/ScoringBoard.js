import React from 'react'
import { Header, Button, Image, Table } from 'semantic-ui-react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";

const ScoringBoard = () => (
    <Table basic='very' celled collapsing>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Activity</Table.HeaderCell>
                <Table.HeaderCell>Score</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/lena.png' rounded size='mini' />
                        <Header.Content>
                            Lena
                            <Header.Subheader>Human Resources hghc gjvh vjjvg</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell><Form.Field>
                    <Form.Input name={'name'}/>
                </Form.Field></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/matthew.png' rounded size='mini' />
                        <Header.Content>
                            Matthew
                            <Header.Subheader>Fabric Design</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell><Form.Field>
                    <Form.Input name={'name'}/>
                </Form.Field></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/lindsay.png' rounded size='mini' />
                        <Header.Content>
                            Lindsay
                            <Header.Subheader>Entertainment</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell><Form.Field>
                    <Form.Input name={'name'}/>
                </Form.Field></Table.Cell>
            </Table.Row>
            <Table.Row>
                <Table.Cell>
                    <Header as='h4' image>
                        <Image src='/images/avatar/small/mark.png' rounded size='mini' />
                        <Header.Content>
                            Mark
                            <Header.Subheader>Executive</Header.Subheader>
                        </Header.Content>
                    </Header>
                </Table.Cell>
                <Table.Cell><Form.Field>
                    <Form.Input name={'name'}/>
                </Form.Field></Table.Cell>
            </Table.Row>
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
)

export default ScoringBoard
