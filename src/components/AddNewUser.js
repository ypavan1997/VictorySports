import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import Dropdown from "semantic-ui-react/dist/es/modules/Dropdown/Dropdown";
import DatePicker from "react-datepicker/es/index";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";
import {createNotification} from "../utils/utils";

const options = [
  {key: 'a', value: 1, text: 'Admin'},
  {key: 'c', value: 11, text: 'Coach'}
];

const initalState = {
  name: '', username: '', user_role: '', address: '', pincode: '', mobile: '', startDate: null, education: '', sport: '', about: ''
}

export default class AddNewUser extends React.Component {

  constructor(props) {
    super(props)
    this.handleDateChange = this.handleDateChange.bind(this)
  }

  state = {  isLoading: false};


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
    const {name, username, user_role, address, pincode, mobile, startDate, education, sport, about, isLoading} = this.state;

    return <React.Fragment>
      <Segment>
        <Label  size={'medium'} color={'blue'} attached='top'>New User Details</Label>
        <Form loading={isLoading}>
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
              <label className={'Admin-Form-Label'}>Role</label>
            </Grid.Column>
            <Grid.Column mobile={10}>
            <Form.Field>
                <Form.Select options={options} name={'role'} value={user_role} placeholder='Role' onChange={this.handleUserRoleChange} fluid/>
            </Form.Field>
            </Grid.Column>
          </Grid.Row>

          { user_role === 11 &&
            <React.Fragment>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Address </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <TextArea name={'address'} value={address} placeholder='Address' style={{ minHeight: 100 }} onChange={this.handleChange}/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Pincode </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input fluid name={'pincode'} value={pincode} placeholder="Pincode" onChange={this.handleChange}/>
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Mobile </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Form.Input name={'mobile'} value={mobile} fluid placeholder="Mobile" onChange={this.handleChange}/>
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
                    <Form.Input placeholder='Education' fluid name={'education'} value={education} onChange={this.handleChange}/>
                  </Form.Field>
                </Grid.Column>

              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={6}>
                  <label className={'Admin-Form-Label'}>Sport </label>
                </Grid.Column>
                <Grid.Column width={10}>
                  <Form.Field>
                    <Dropdown placeholder='Sport(s)' value={sport} fluid selection options={[{key: 'a', text: 'Football' ,value: 1},
                      {key: 'b', text: 'Boxing', value: 2}]} onChange={this.handleSportChange}/>
                  </Form.Field>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row centered>
              <Grid.Column width={6}>
                <label className={'Admin-Form-Label'}>About </label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <TextArea name={'about'} value={about} placeholder='About' style={{ minHeight: 100 }} onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>

            </React.Fragment>}
        </Grid>
        </Form>
        <br/>
        {this.state.user_role === 11 && <Button disabled={isLoading} primary content={'Add New Coach'} onClick={()=> {
          this.setState({isLoading: true})
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
          fetch("https://ohack.herokuapp.com/v1/victoryfoundation/users",
            {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                username: username,
                name: name,
                about: about,
                address: address,
                experience: education,
                sport: {
                  id: sport
                },
                role: {
                  id: user_role
                }
              })
            })
            .then(res => res.json())
            .then(

              (result) => {
                const {statusCodeValue} = result;
                if (statusCodeValue < 400) {
                  this.setState({
                    isLoaded: true,
                    isLoading: false,
                    result: result,
                    ...initalState
                  });
                  createNotification('success', 'Coach Added')
                } else {
                  this.setState({
                    isLoaded: true,
                    isLoading: false,
                    error: result
                  });
                  createNotification('error', 'Could not add coach, please try again')
                }
              },
              // Note: it's important to handle errors here
              // instead of a catch() block so that we don't swallow
              // exceptions from actual bugs in components.
              (error) => {
                this.setState({
                  isLoaded: true,
                  isLoading: false,
                  error
                });
                createNotification('error', 'Could not add coach, please try again')
              }
            )
        }}/> }
        {this.state.user_role === 1 && <Button disabled={isLoading} primary content={'Add New Admin'} onClick={()=> {
          this.setState({isLoading: true})
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
          fetch("https://ohack.herokuapp.com/v1/victoryfoundation/users",
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
            .then(result => {
                const {statusCodeValue} = result;
                if (statusCodeValue < 400 && statusCodeValue > 200) {
                  createNotification('success', 'Admin User Added')
                  this.setState({
                    isLoading: false,
                    result: result,
                    ...initalState
                  });
                } else {
                  this.setState({
                    isLoading: false,
                    error: result
                  });
                  createNotification('error', 'Could not add Admin')
                }
                return result
              }).catch((error) => {
            this.setState({
              isLoaded: true,
              isLoading: false,
              error
            });
            createNotification('error', 'Could not add Admin')
          })
        }}/> }
        {!this.state.user_role && <Button disabled content={'Add New User'} onClick={()=> console.log(this.state)}/> }
      </Segment>
    </React.Fragment>
  }

}
