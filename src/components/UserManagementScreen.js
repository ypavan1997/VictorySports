import React, { Component } from 'react'
import AddUser from "./AddNewUser";
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";


const sections = [
  { key: 'user_mgmgt', content: 'User Management', link: false },
  { key: 'add_user', content: 'Add a user', link: true },
]

export default class UserManagementScreen extends Component {

  render() {

    return <React.Fragment>
      <Segment basic textAlign={'left'}>
      <Breadcrumb icon='right angle' sections={sections} />
      </Segment>

      <AddUser/>


    </React.Fragment>
  }
}
