import React, { Component } from 'react'
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import NewStudentPersonalInfo from "./NewStudentPersonalInfo";
import MedicalInfo from "./MedicalInfo";
import FamilyDetails from "./FamilyDetails";
import MiscDetails from "./MiscDetails";
import StudentUpload from "./StudentUpload";
import Tab from "semantic-ui-react/dist/es/modules/Tab/Tab";

export default class NewStudent extends Component {

  constructor(props) {
    super(props);
    this.handleDojChange = this.handleDojChange.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleHubChange = (event, props) => {
    this.setState({hub: props.value})
  };

  handleDojChange(date) {
    this.setState({
      doj: date
    });
  }

  handleDobChange(date) {
    this.setState({
      dob: date
    });
  }


  render() {

    const panes = [
      { menuItem: 'Personal', pane: <Tab.Pane>
          <NewStudentPersonalInfo
            handleInputs={this.handleChange}
            handleHubChange={this.handleHubChange}
            handleDobChange={this.handleDobChange}
            handleDojChange={this.handleDojChange}
            {...this.state}
        />
        </Tab.Pane> },
      { menuItem: 'Medical', pane: <Tab.Pane><MedicalInfo handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Family', pane: <Tab.Pane><FamilyDetails handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Misc', pane:  <Tab.Pane> <MiscDetails handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Upload', pane: <Tab.Pane> <StudentUpload handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
    ];

    return (
      <React.Fragment>
        <Tab renderActiveOnly={false} panes={panes} menu={{attached: true, size: 'small', tabular: true }} />
        <Button primary content={'Create Student'}/>

      </React.Fragment>
    )
  }
}
