import React from 'react'
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Table from "semantic-ui-react/dist/es/collections/Table/Table";
import Checkbox from "semantic-ui-react/dist/es/modules/Checkbox/Checkbox";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import {addUserList} from "../redux/actions/UserListActions";
import {store} from "../index";
import connect from "react-redux/es/connect/connect";
import Header from "./Header";
import _ from "lodash";
import Menu from "semantic-ui-react/dist/es/collections/Menu/Menu";


class UserStatus extends React.Component {


    constructor(props) {
        super(props);
        this.loadUserData();
    }

    loadUserData() {
          fetch('https://ohack.herokuapp.com/v1/victoryfoundation/users/')
          .then(response => response.json())
          .then(data => {
              if(data) {
                  store.dispatch(addUserList(data));
              }
          });
    }


  render() {
    return <React.Fragment>
      <Table celled padded unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Username</Table.HeaderCell>
            <Table.HeaderCell>Role</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Select</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
            {_.map(this.props.userList, user =>
                <Table.Row>
                  <Table.Cell>{user.name}</Table.Cell>
                  <Table.Cell>{user.username}</Table.Cell>
                  <Table.Cell>{user.role.type}</Table.Cell>
                  <Table.Cell>{user.statusR}</Table.Cell>
                  <Table.Cell>
                    <Checkbox />
                </Table.Cell>
            </Table.Row>
                )}
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

    </React.Fragment>
  }

}

function mapStateToProps(state) {
    return {
        userList: state.userManagement.userList
    }
}


export default connect(
    mapStateToProps,
    null
)(UserStatus);
