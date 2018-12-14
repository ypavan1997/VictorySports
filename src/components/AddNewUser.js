import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";
import DatePicker from "react-datepicker/es/index";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";

const options = [
  {key: 'a', value: 'admin', text: 'Admin'},
  {key: 'c', value: 'coach', text: 'Coach'}
];

export default class AddNewUser extends React.Component {

  state = { activeItem: 'Add New User' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleUserRoleChange = (event, props) => {
    this.setState({user_role: props.value})
  };

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <React.Fragment>
      <Segment>
        <Label  size={'medium'} color={'blue'} attached='top'>New User Details</Label>
        <Form>
        <Grid doubling >
            <Grid.Row>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Name </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input fluid placeholder="Name" />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Username </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input fluid placeholder="Username" />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={6} textAlign={'left'}>
                <label className={'Admin-Form-Label'}>Password </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input type={'password'} fluid placeholder="Password" />
                </Form.Field>
              </Grid.Column>

            </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Retype Password </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input type={'password'} fluid placeholder="Retype Password" />
              </Form.Field>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Role</label>
            </Grid.Column>
            <Grid.Column mobile={10}>
            <Form.Field>
                <Form.Select options={options} placeholder='Role' onChange={this.handleUserRoleChange} fluid/>
            </Form.Field>
            </Grid.Column>
          </Grid.Row>

          { this.state.user_role === 'coach' &&
            <React.Fragment>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Name </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input fluid placeholder="Name" />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Address </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <TextArea placeholder='Address' style={{ minHeight: 100 }} />
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Pincode </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input fluid placeholder="Pincode" />
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Mobile </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input fluid placeholder="Mobile" />
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Date of birth </label>
                </Grid.Column>
                <Grid.Column width={10}>

                  <DatePicker
                    selected={this.state.startDate}
                    placeholderText="Click to select a date of birth"
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    onChange={this.handleChange}
                  />

                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Education </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Dropdown placeholder='Education' fluid multiple selection options={[]} />
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Sport </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Dropdown placeholder='Sport(s)' fluid multiple selection options={[{key: 'a', text: 'Football' ,value: 'football'},
                      {key: 'b', text: 'Boxing', value: 'boxing'}]} />
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>
            </React.Fragment>




               }
        </Grid>
        </Form>
        <br/>
        {this.state.user_role === 'coach' && <Button primary content={'Add New Coach'}/> }
        {this.state.user_role === 'admin' && <Button primary content={'Add New Admin'}/> }
        {!this.state.user_role && <Button disabled content={'Add New User'}/> }
      </Segment>
    </React.Fragment>
  }

}
