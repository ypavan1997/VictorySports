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
            <Dropdown.Item>User Details</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
          name='two'
          active={activeItem === 'two'}
          url={'hub_mgmt'}
          onClick={this.navigate}
        >
          Hub Management
        </Menu.Item>

        <Menu.Item
          name='three'
          active={activeItem === 'three'}
          url={'stdnt_mgmt'}
          onClick={this.navigate}
        >
          Student Management
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
