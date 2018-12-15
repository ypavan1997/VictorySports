import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import logo from '../logo.png';
import { withRouter } from 'react-router-dom'
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";

class Header extends Component {
  state = {showSignInModal: false};

  navigate = (e, {url, name, value}) => {
    this.setState({ activeItem: name });
    console.log('...', url);
    this.props.history.push(url || value)
  };

  render() {
    const { activeItem } = this.state;

    return (
      <Menu stackable color={'blue'}  size={'large'}>
        <Menu.Item>
          <img src={logo} alt={'logo'}/>
        </Menu.Item>

        <Dropdown text='User Management' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.navigate} value={'user_mgmt'}>Add New User</Dropdown.Item>
            <Dropdown.Item onClick={this.navigate} value={'user_status'}>User Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Hub Management' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.navigate} value={'create_hub'}>Create Hub</Dropdown.Item>
            <Dropdown.Item onClick={this.navigate} value={'edit_hub'}>Edit Hub</Dropdown.Item>
            <Dropdown.Item onClick={this.navigate} value={'delete_hub'}>Delete Hub</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown text='Student Management' pointing className='link item'>
          <Dropdown.Menu>
            <Dropdown.Item onClick={this.navigate} value={'new_std'}>New Registration</Dropdown.Item>
            <Dropdown.Item onClick={this.navigate} value={'edit_std'}>Edit Registration</Dropdown.Item>
            <Dropdown.Item onClick={this.navigate} value={'std_status'}>Update Status</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item name='hub-activity-tracker' value={'hub_activity_tracker'} onClick={this.navigate}>
            Hub Activity Tracker
          </Menu.Item>

        <Menu.Menu position={'right'}>
          <Menu.Item name='sign-in' active={activeItem === 'sign-in'} onClick={() => this.props.showModal('SIGN_IN_MODAL')}>
            Sign-in
          </Menu.Item>
        </Menu.Menu>
      </Menu>

    )
  }
}

export default withRouter(Header);
