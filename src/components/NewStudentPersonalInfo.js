import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import DatePicker from "react-datepicker/es/index";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";

const options = [
  {key: 'a', value: 'admin', text: 'Admin'},
  {key: 'c', value: 'coach', text: 'Coach'}
];

export default class NewStudentPersonalInfo extends React.Component {

  render() {
    const {handleInputs, name, username, hubs, address, doj, dob, handleDobChange, handleDojChange, handleHubChange, poNumber} = this.props;

    return <React.Fragment>

        <Form>
          <Grid doubling >
            <Grid.Row>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Name </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'name'} value={name} fluid placeholder="Name" onChange={handleInputs}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Name of school </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'username'} value={username} fluid placeholder="Username" onChange={handleInputs}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column mobile={6} textAlign={'left'}>
                <label className={'Admin-Form-Label'}>Hub Name</label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Select options={hubs} name={'hubs'}  placeholder='Hub' onChange={handleHubChange} fluid/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <label className={'Admin-Form-Label'} >Address </label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <TextArea name={'address'} onChange={handleInputs} value={address} placeholder='Address' style={{ minHeight: 100 }} />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column mobile={6}>
                <label className={'Admin-Form-Label'}>Date of Joining </label>
              </Grid.Column>
              <Grid.Column mobile={10}>

                <DatePicker
                  selected={doj}
                  placeholderText="Click to select a date"
                  maxDate={new Date()}
                  showDisabledMonthNavigation
                  showMonthDropdown
                  showYearDropdown
                  dropdownMode="select"
                  dateFormat="dd/MM/yyyy"
                  onChange={handleDojChange}
                />

              </Grid.Column>


            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <label className={'Admin-Form-Label'}>Post Office </label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <Form.Input fluid placeholder="Post Office Number" name={'poNumber'} value={poNumber} onChange={handleInputs}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

              <Grid.Row centered>
                <Grid.Column mobile={6}>
                  <label className={'Admin-Form-Label'}>Date of birth </label>
                </Grid.Column>
                <Grid.Column mobile={10}>

                  <DatePicker
                    selected={dob}
                    placeholderText="Click to select a date of birth"
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    onChange={handleDobChange}
                  />

                </Grid.Column>
            </Grid.Row>

          </Grid>
        </Form>
        <br/>

    </React.Fragment>
  }

}
