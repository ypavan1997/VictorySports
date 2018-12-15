import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
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

  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  state = { activeItem: 'Add New User' };


  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleUserRoleChange = (event, props) => {
    this.setState({user_role: props.value})
  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const {name, username, password, retype_password, user_role} = this.state;

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
                  <Form.Input name={'name'} value={name} fluid placeholder="Name" onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Username </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'username'} value={username} fluid placeholder="Username" onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column mobile={6} textAlign={'left'}>
                <label className={'Admin-Form-Label'}>Password </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input type={'password'} name={'password'} value={password} fluid placeholder="Password" onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>

            </Grid.Row>

          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Retype Password </label>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input type={'password'} name={'retype_password'} value={retype_password} fluid placeholder="Retype Password" onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>

          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <label className={'Admin-Form-Label'}>Role</label>
            </Grid.Column>
            <Grid.Column mobile={10}>
            <Form.Field>
                <Form.Select options={options} name={'role'} value={user_role} placeholder='Role' onChange={this.handleUserRoleChange} fluid/>
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
                    onChange={this.handleDateChange}
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
