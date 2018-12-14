import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import DatePicker from "react-datepicker";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Table from "semantic-ui-react/dist/es/collections/Table/Table";
import Checkbox from "semantic-ui-react/dist/es/modules/Checkbox/Checkbox";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";


export default class UserStatus extends React.Component {


  render() {
    return <Container>
      <Table celled padded unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Select</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>Some Person</Table.Cell>
            <Table.Cell>Coach</Table.Cell>
            <Table.Cell>Enabled</Table.Cell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Some Other Person</Table.Cell>
            <Table.Cell>Admin</Table.Cell>
            <Table.Cell>Disabled</Table.Cell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Another Person</Table.Cell>
            <Table.Cell>Coach</Table.Cell>
            <Table.Cell>Enabled</Table.Cell>
            <Table.Cell>
              <Checkbox />
            </Table.Cell>
          </Table.Row>
        </Table.Body>

        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell colSpan='4'>
              <Button floated='right' icon labelPosition='left' primary size='small'>
                <Icon name='user' /> Flip
              </Button>

            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>

    </Container>
  }

}
