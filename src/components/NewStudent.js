import React, { Component } from 'react'
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import NewStudentPersonalInfo from "./NewStudentPersonalInfo";
import MedicalInfo from "./MedicalInfo";
import FamilyDetails from "./FamilyDetails";
import MiscDetails from "./MiscDetails";
import StudentUpload from "./StudentUpload";
import Tab from "semantic-ui-react/dist/es/modules/Tab/Tab";
import {createNotification} from "../utils/utils";
import Loader from "semantic-ui-react/dist/es/elements/Loader/Loader";

export default class NewStudent extends Component {

  constructor(props) {
    super(props);
    this.handleDojChange = this.handleDojChange.bind(this);
    this.handleDobChange = this.handleDobChange.bind(this);
    this.handleIdProofFileChange = this.handleIdProofFileChange.bind(this);
    this.handlePicChange = this.handlePicChange.bind(this);
  }

  state = {isLoading: false};

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

  handleIdProofFileChange(fileItems) {
    console.log('file upload', fileItems)
    this.setState({
      idProofs: fileItems.map(fileItem => fileItem.file)
    });
  }

  handlePicChange(fileItems) {
    console.log('file upload', fileItems)
    this.setState({
      picture: fileItems.map(fileItem => fileItem.file)
    });
  }


  render() {

    const  { isLoading, name, address} = this.state
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
      { menuItem: 'Medical', pane: <Tab.Pane ><MedicalInfo handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Family', pane: <Tab.Pane><FamilyDetails handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Misc', pane:  <Tab.Pane > <MiscDetails handleInputs={this.handleChange} {...this.state}/></Tab.Pane> },
      { menuItem: 'Upload', pane: <Tab.Pane> <StudentUpload
          handlePicChange={this.handlePicChange}
          handleIdProofFileChange={this.handleIdProofFileChange}/></Tab.Pane> },
    ];

    return (
      <React.Fragment>
        <Loader active={isLoading} size='large'>Loading</Loader>
        <Tab renderActiveOnly={false} panes={panes} menu={{attached: true, size: 'small', tabular: true }} />
        <Button primary content={'Create Student'} disabled={isLoading}
                onClick={() => {
                  this.setState({isLoading: true})
                  const data = new FormData();
                  data.append('image1', this.state.idProofs[0])
                  data.append('image2', this.state.picture[0])
                  data.append('student_name', name)
                  data.append('hub_id', 81)
                  data.append('sport_id', 31)
                  data.append('active', 'A')
                  data.append('status', 'ACTIVE')
                  data.append('dob', '1991-05-19')
                  data.append('aadhar', '123123')
                  data.append('dob', '1991-05-19')
                  data.append('year', 1991);
                  data.append('weight', 20);
                  data.append('height', 10);
                  data.append('address', address);

                  fetch('http://ohack.herokuapp.com/v1/victoryfoundation/student', {
                    method: 'POST',
                    body: data,
                  })
                    .then(res => res.json())
                    .then(result => {console.log(result); this.setState({isLoading: false});
                      createNotification('success', 'Student Added')})
                    .catch(
                      error =>{
                        createNotification('error', 'Could not  add student');
                        this.setState({isLoading: false})
                      }
                      )
                  ;
                }}
        />

      </React.Fragment>
    )
  }
}
