import React, { Component } from 'react'
import { Grid, Segment, Container } from 'semantic-ui-react'
import AddAdmin from "./AddNewAdminUser";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";
import AddNewCoach from "./AddNewCoach";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import DatePicker from "react-datepicker/es/index";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";
import TextArea from "semantic-ui-react/dist/es/addons/TextArea/TextArea";

export default class CreateHub extends Component {
  render() {
    return <Container fluid>
      <br/>
      <Grid columns={5}>

        <Grid.Column width={1}>
        </Grid.Column>

        <Grid.Column width={6}>
          <Segment>
            <Label color={'blue'} size={'medium'} attached='top'>Hub Details</Label>
            <Form size={'large'}>
              <Grid columns={2} >
                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Hub Name </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid placeholder="Hub name" />
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
                    <label className={'Admin-Form-Label'}>Supported By </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid placeholder="Retype Password" />
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
            <Label color={'blue'} size={'medium'} attached='top'>Props</Label>
            <Form size={'huge'}>
              <Grid columns={2} >
                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Prop 1 </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Prop 2 </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Prop 3 </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid />
                    </Form.Field>
                  </Grid.Column>

                </Grid.Row>

                <Grid.Row centered>
                  <Grid.Column width={6}>
                    <label className={'Admin-Form-Label'}>Prop 4 </label>
                  </Grid.Column>
                  <Grid.Column width={10}>
                    <Form.Field>
                      <Form.Input fluid />
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
      <Button primary>
        Create Hub
      </Button>
    </Container>
  }
}
