import { FilePond } from 'react-filepond';
import React from 'react'
import 'filepond/dist/filepond.min.css';

export default class StudentUpload extends React.Component {
  render() {
    return <React.Fragment>
      <label>Upload Photo(s)</label>
      <FilePond name={'dfgdf'} allowMultiple={true} onupdatefiles={this.props.handleIdProofFileChange}/>
      <label>Upload Id Proof(s)</label>
      <FilePond allowMultiple={true} onupdatefiles={this.props.handlePicChange}/>
    </React.Fragment>
  }
}
