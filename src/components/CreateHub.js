import React, { Component } from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";

export default class CreateHub extends Component {
  render() {
    return <React.Fragment>
      <Segment>
        <Label  size={'medium'} color={'blue'} attached='top'>Hub Details</Label>
      <Grid stackable>

        <Form>
          <Grid doubling >
            <Grid.Row>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Father's Name </label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'name'} value={''} fluid placeholder="Hub Name" onChange={this.handleChange}/>
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column textAlign={'left'} mobile={6}>
                <label className={'Admin-Form-Label'}>Supported By</label>
              </Grid.Column>
              <Grid.Column mobile={10}>
                <Form.Field>
                  <Form.Input name={'username'} value={''} fluid placeholder="Supported By " onChange={this.handleChange}/>
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
            <Grid.Row>
            <Grid.Column mobile={6} textAlign={'left'}>
              <Form.Field>
                <Form.Select options={[]} name={'role'} value={''} placeholder='Prop' fluid/>
              </Form.Field>
            </Grid.Column>
            <Grid.Column mobile={10}>
              <Form.Field>
                <Form.Input name={'count'} value={''} placeholder='Count' fluid/>
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
      <Button primary>
        Create Hub
      </Button>
    </React.Fragment>
  }
}
