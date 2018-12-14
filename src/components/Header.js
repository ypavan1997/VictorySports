import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";
import NavBar from "./NavBar";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Accordion from "semantic-ui-react/dist/es/modules/Accordion/Accordion";

class Header extends Component {
  state = {showSignInModal: false};

  navigate = (e, {url, name, value}) => {
    this.setState({ activeItem: name });
    console.log('...', url);
    this.props.history.push(url || value)
  };

  render() {
    const { activeItem } = this.state;

    const leftItemsDesktop = [
      { as:() => <React.Fragment>
          <Dropdown text='User Management' pointing className='link item'>
          <Dropdown.Menu>
          <Dropdown.Item onClick={this.navigate} value={'user_mgmt'}>User Management</Dropdown.Item>
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
        </React.Fragment>}
    ];

    const leftItems = [
      { as:() => <Accordion as={Menu} vertical>
          <Menu.Item>
            <Accordion.Title
              active={true}
              content='User Management'
              index={0}
              onClick={this.handleClick}
            />
            <Accordion.Content active={true} content={[<p>Add A User</p>, <p>User Status</p>]} />
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={true}
              content='HubManagement'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={true} content={[<p>Create Hub</p>, <p>Edit Hub</p>]} />
          </Menu.Item>
        </Accordion>}
    ];
    const rightItems = [
      { as: "a", content: "Login", key: "login", onClick: () => this.props.showModal('SIGN_IN_MODAL')}
    ];

    return (
      <React.Fragment>
        <NavBar leftItemsDesktop={leftItemsDesktop} leftItems={leftItems} rightItems={rightItems}>
          {this.props.children}
        </NavBar>

      </React.Fragment>

    )
  }
}

export default withRouter(Header);
