import React, { Component } from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import {createNotification} from "../utils/utils";

const initalState = {
    name: '', username: '', address: ''
}

export default class CreateHub extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    state = {  isLoading: false};

    handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
      const {name, username, address, isLoading} = this.state;
    return <React.Fragment>
      <Segment>
        <Label  size={'medium'} color={'blue'} attached='top'>Hub Details</Label>
      <Grid stackable>

        <Form loading={isLoading}>
          <Grid doubling >
            <Grid.Row>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Father's Name </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'name'} value={name} fluid placeholder="Hub Name" onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Supported By</label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'username'} value={username} fluid placeholder="Supported By " onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
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
            <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <Form.Field>
                <Form.Select options={[]} name={'role'} value={''} placeholder='Prop' fluid/>
              </Form.Field>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'count'} value={''} placeholder='Count' fluid onChange={this.handleChange}/>
              </Form.Field>
            </Grid.Column>
          </Grid.Row>
          </Grid>
        </Form>
        <br/>
      </Grid>
      <br/>
        <br/>
      </Segment>
        <Button disabled={isLoading} primary content={'Create Hub'} onClick={()=> {
            this.setState({isLoading: true})
            fetch("http://ohack.herokuapp.com/v1/victoryfoundation/hub/create",
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        hubName: name,
                        hubAddress: address,
                        supportedBy: username
                    })
                })
                .then(res => res.json())
                .then(

                    (result) => {
                        const {statusCodeValue} = result;
                        if (statusCodeValue < 400 && statusCodeValue > 200) {
                            this.setState({
                                isLoading: false,
                                result: result,
                                ...initalState
                            });
                            createNotification('success', 'Hub Added')
                        } else {
                            this.setState({
                                isLoading: false,
                                error: result
                            });
                            createNotification('error', 'Could not add hub, please try again')
                        }
                    },
                    // Note: it's important to handle errors here
                    // instead of a catch() block so that we don't swallow
                    // exceptions from actual bugs in components.
                    (error) => {
                        this.setState({
                            isLoading: false,
                            error
                        });
                        createNotification('error', 'Could not add hub, please try again')
                    }
                )
        }}/>
    </React.Fragment>
  }
}
