import React, { Component } from 'react'
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import NewStudentPersonalInfo from "./NewStudentPersonalInfo";
import MedicalInfo from "./MedicalInfo";
import FamilyDetails from "./FamilyDetails";
import MiscDetails from "./MiscDetails";
import StudentUpload from "./StudentUpload";
import Tab from "semantic-ui-react/dist/es/modules/Tab/Tab";

export default class NewStudent extends Component {


  render() {

    const panes = [
      { menuItem: 'Personal', pane: <Tab.Pane><NewStudentPersonalInfo/></Tab.Pane> },
      { menuItem: 'Medical', pane: <Tab.Pane><MedicalInfo/></Tab.Pane> },
      { menuItem: 'Family', pane: <Tab.Pane><FamilyDetails/></Tab.Pane> },
      { menuItem: 'Misc', pane:  <Tab.Pane> <MiscDetails/></Tab.Pane> },
      { menuItem: 'Upload', pane: <Tab.Pane> <StudentUpload/></Tab.Pane> },
    ];

    return (
      <React.Fragment>
        <Tab renderActiveOnly={false} panes={panes} menu={{attached: true, size: 'small', tabular: true }} />
        <Button primary content={'Create Student'}/>

      </React.Fragment>
    )
  }
}
