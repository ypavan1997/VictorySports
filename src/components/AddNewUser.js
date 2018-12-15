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
  {key: 'a', value: 11, text: 'Admin'},
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

  handleSportChange = (event, props) => {
    this.setState({sport: props.value})
  };

  handleDateChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    const {name, username, password, retype_password, user_role, address, pincode, mobile, startDate, education, sport, about} = this.state;

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
                  <label className={'Admin-Form-Label'}>Address </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <TextArea name={'address'} value={address} placeholder='Address' style={{ minHeight: 100 }} onChange={this.handleUserRoleChange}/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Pincode </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input fluid name={'pincode'} value={pincode} placeholder="Pincode" onChange={this.handleUserRoleChange}/>
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Mobile </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input name={'mobile'} value={mobile} fluid placeholder="Mobile" onChange={this.handleUserRoleChange}/>
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Date of birth </label>
                </Grid.Column>
                <Grid.Column width={10}>

                  <DatePicker
                    selected={startDate}
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
                    <Form.Input placeholder='Education' fluid name={'education'} value={education} />
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Sport </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Dropdown placeholder='Sport(s)' value={sport} fluid multiple selection options={[{key: 'a', text: 'Football' ,value: 'football'},
                      {key: 'b', text: 'Boxing', value: 'boxing'}]} onChange={this.handleSportChange}/>
                  </Form.Field>
                </Grid.Column>

                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Address </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <TextArea name={'about'} value={about} placeholder='About' style={{ minHeight: 100 }} onChange={this.handleChange}/>
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>

              </Grid.Row>
            </React.Fragment>

               }
        </Grid>
        </Form>
        <br/>
        {this.state.user_role === 'coach' && <Button primary content={'Add New Coach'} onClick={()=> console.log(this.state)}/> }
        {this.state.user_role === 11 && <Button primary content={'Add New Admin'} onClick={()=> {
          console.log({
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: username,
              name: name,
              role: {
                id: user_role
              }
            })
          });
          fetch("http://ohack.herokuapp.com/v1/victoryfoundation/users",
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                name: name,
                role: {
                  id: user_role
                }
              })
            })
            .then(res => res.json())
            .then(
              (result) => {
                this.setState({
                  isLoaded: true,
                  result: result
                });
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            )
        }}/> }
        {!this.state.user_role && <Button disabled content={'Add New User'} onClick={()=> console.log(this.state)}/> }
      </Segment>
    </React.Fragment>
  }

}
