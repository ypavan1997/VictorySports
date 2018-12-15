import _ from "lodash";
import React, { Component } from "react";
import logo from '../logo.png'
import Sidebar from "semantic-ui-react/dist/es/modules/Sidebar/Sidebar";
import Menu from "semantic-ui-react/dist/es/collections/Menu/Menu";
import Icon from "semantic-ui-react/dist/es/elements/Icon/Icon";
import Image from "semantic-ui-react/dist/es/elements/Image/Image";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Responsive from "semantic-ui-react/dist/es/addons/Responsive/Responsive";
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";

const NavBarMobile = ({
                        children,
                        leftItems,
                        onPusherClick,
                        onToggle,
                        rightItems,
                        visible
                      }) => (
  <Sidebar.Pushable>
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      items={leftItems}
      vertical
      visible={visible}
    />
    <Sidebar.Pusher
      dimmed={visible}
      onClick={onPusherClick}
      style={{ minHeight: "100vh" }}
    >
      <Menu fixed="top" color={'blue'}>
        <Menu.Item>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item onClick={onToggle}>
          <Icon name="sidebar" />
        </Menu.Item>
        <Menu.Menu position="right">
          {_.map(rightItems, item => <Menu.Item {...item} />)}
        </Menu.Menu>
      </Menu>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

const NavBarDesktop = ({ leftItems, rightItems, navigate }) => (
  <Menu fixed="top" color={'blue'}>
    <Menu.Item>
      <Image size="mini" src={logo} onClick={() => navigate(null, {url: '/'})}/>
    </Menu.Item>
    {_.map(leftItems, item => <Menu.Item {...item} />)}
    <Menu.Menu position="right">
      {_.map(rightItems, item => <Menu.Item {...item} />)}
    </Menu.Menu>
  </Menu>
);

const NavBarChildren = ({ children }) => (
  <Container style={{ marginTop: "5em" }}>{children}</Container>
);

export default class NavBar extends Component {
  render() {
    const { children, leftItems, rightItems, leftItemsDesktop, visible, handlePusher, handleToggle, navigate} = this.props;

    return (
      <React.Fragment>
        <Responsive {...Responsive.onlyMobile}>
          <NavBarMobile
            leftItems={leftItems}
            onPusherClick={handlePusher}
            onToggle={handleToggle}
            rightItems={rightItems}
            visible={visible}
          >
            <NavBarChildren>{children}</NavBarChildren>
          </NavBarMobile>
        </Responsive>
        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
          <NavBarDesktop leftItems={leftItemsDesktop} rightItems={rightItems} navigate={navigate}/>
          <NavBarChildren>{children}</NavBarChildren>
        </Responsive>
      </React.Fragment>
    );
  }
}
