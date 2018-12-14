import React, { Component } from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import AddAdmin from "./AddNewAdminUser";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";
import AddNewCoach from "./AddNewCoach";

const options = [
  {key: 'a', value: 'admin', text: 'Admin'},
  {key: 'c', value: 'coach', text: 'Coach'}
]

const sections = [
  { key: 'user_mgmgt', content: 'User Management', link: false },
  { key: 'add_user', content: 'Add a user', link: true },
]

export default class UserManagementScreen extends Component {
  state = { activeItem: 'Add New User' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleUserRoleChange = (event, props) => {
    this.setState({user_role: props.value})
  }

  render() {

    return <React.Fragment>
      <Segment basic textAlign={'left'}>
      <Breadcrumb icon='right angle' sections={sections} />
      </Segment>
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Form size={'large'}>
            <Form.Select inline label='Select a role for the user' options={options} placeholder='Role' onChange={this.handleUserRoleChange}/>
          </Form>
        </Grid.Column>
      </Grid.Row>


    </Grid>
      { this.state.user_role === 'admin' && <AddAdmin/> }

      { this.state.user_role === 'coach' && <AddNewCoach/>}

    </React.Fragment>
  }
}
