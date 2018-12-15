import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";
import NavBar from "./NavBar";
import Accordion from "semantic-ui-react/dist/es/modules/Accordion/Accordion";
import Menu from "semantic-ui-react/dist/es/collections/Menu/Menu";

class Header extends Component {
  state = {showSignInModal: false, visible: false};

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  handleToggle = () => this.setState({ visible: !this.state.visible });

  navigate = (e, {url, name, value}) => {
    this.setState({ activeItem: name });
    console.log('...', url);
    this.props.history.push(url || value)
  };

  render() {
    const { activeItem, visible } = this.state;
    const { children, history} = this.props;

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
            <Accordion.Content active={true}>
              <p onClick={()=> {history.push('user_mgmt'); this.handlePusher()}}>Add A User</p>,
              <label onClick={()=> {history.push('user_status');  this.handlePusher()}}>User Status</label>
            </Accordion.Content>
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={true}
              content='Hub Management'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={true}>
              <p onClick={()=> {history.push('create_hub'); this.handlePusher()}}>Add A Hub</p>,
              <label onClick={()=> {history.push('edit_hub');  this.handlePusher()}}>Edit Hub</label>
            </Accordion.Content>
          </Menu.Item>

          <Menu.Item>
            <Accordion.Title
              active={true}
              content='Student Management'
              index={1}
              onClick={this.handleClick}
            />
            <Accordion.Content active={true}>
              <p onClick={()=> {history.push('new_std'); this.handlePusher()}}>New Registration</p>,
              <p onClick={()=> {history.push('edit_std');  this.handlePusher()}}>Edit Registration</p>
              <label onClick={()=> {history.push('edit_std');  this.handlePusher()}}>Update Status</label>
            </Accordion.Content>
          </Menu.Item>


        </Accordion>}
    ];
    const rightItems = [
      { as: "a", content: "Login", key: "login", onClick: () => this.props.showModal('SIGN_IN_MODAL')}
    ];

    return (
      <React.Fragment>
        <NavBar leftItemsDesktop={leftItemsDesktop}
                leftItems={leftItems}
                rightItems={rightItems}
                visible={visible}
                handleToggle={this.handleToggle}
                handlePusher={this.handlePusher}
        >
          {children}
        </NavBar>
      </React.Fragment>

    )
  }
}

export default withRouter(Header);