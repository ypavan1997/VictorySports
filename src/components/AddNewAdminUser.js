import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

export default class AddNewAdminUser extends React.Component {

  render() {
    return <Container>
      <br/>
      <br/>
      <Segment>
        <Label  size={'medium'} color={'blue'} attached='top'>Login Details</Label>
        <Form size={'large'}>
        <Grid columns={3} >
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
          <Grid.Row centered>
            <Button primary>
              Create Admin
            </Button>

          </Grid.Row>
        </Grid>
        </Form>
        <br/>
      </Segment>
    </Container>
  }

}
