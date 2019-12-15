import React, { Component } from "react";
import AddUser from "./AddNewUser";
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import { connect } from "react-redux";
import EditUser from "./EditUser";

const addUserSections = [
  { key: "user_mgmgt", content: "User Management", link: false },
  { key: "add_user", content: "Add a user", link: true }
];

const editUserSections = [
  { key: "user_mgmgt", content: "User Management", link: false },
  { key: "edit_user", content: "edit user", link: true }
];

class UserManagementScreen extends Component {
  render() {
    console.log(this.props);
    return (
      <React.Fragment>
        {!this.props.state.userManagement.editUser && (
          <div>
            <Segment basic textAlign={"left"}>
              <Breadcrumb icon="right angle" sections={addUserSections} />
            </Segment>{" "}
            <AddUser />
          </div>
        )}
        {this.props.state.userManagement.editUser && (
          <div>
            <Segment basic textAlign={"left"}>
              <Breadcrumb icon="right angle" sections={editUserSections} />
            </Segment>
            <EditUser state={this.props.state} />
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { state: state };
};
let UserManagementScreenHelper = connect(mapStateToProps)(UserManagementScreen);

export default UserManagementScreenHelper;
