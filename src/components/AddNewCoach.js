import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import DatePicker from "react-datepicker";


export default class AddNewCoach extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      startDate: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <Container fluid>
      <br/>
        <Grid columns={5}>

          <Grid.Column width={1}>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment>
              <Label  size={'medium'} attached='top'>Login Details</Label>
              <Form size={'large'}>
                <Grid columns={2} >
                  <Grid.Row centered>
                    <Grid.Column width={6}>
                      <label className={'Admin-Form-Label'}>Username </label>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Form.Field>
                        <Form.Input fluid placeholder="Username" />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={6}>
                      <label className={'Admin-Form-Label'}>Password </label>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Form.Field>
                        <Form.Input type={'password'} fluid placeholder="Password" />
                      </Form.Field>
                    </Grid.Column>
                  </Grid.Row>
                  <Grid.Row centered>
                    <Grid.Column width={6}>
                      <label className={'Admin-Form-Label'}>Retype Password </label>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Form.Field>
                        <Form.Input type={'password'} fluid placeholder="Retype Password" />
                      </Form.Field>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </Form>
            </Segment>
          </Grid.Column>

          <Grid.Column width={1}>
          </Grid.Column>

          <Grid.Column width={7}>
            <Segment>
              <Label size={'medium'} attached='top'>Coach Details</Label>
              <Form size={'huge'}>
                <Grid columns={2} >
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
                        <Form.Input fluid placeholder="Address" />
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
                        <Form.Input fluid placeholder="Mobile" />
                      </Form.Field>
                    </Grid.Column>

                  </Grid.Row>

                  <Grid.Row centered>
                    <Grid.Column width={6}>
                      <label className={'Admin-Form-Label'}>Sport </label>
                    </Grid.Column>
                    <Grid.Column width={10}>
                      <Form.Field>
                        <Form.Input fluid placeholder="Mobile" />
                      </Form.Field>
                    </Grid.Column>

                  </Grid.Row>
                </Grid>
              </Form>
            </Segment>
          </Grid.Column>

          <Grid.Column width={1}>
          </Grid.Column>


        </Grid>
        <br/>
    </Container>
  }

}
