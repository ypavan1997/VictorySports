import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Container from "semantic-ui-react/dist/es/elements/Container/Container";
import Label from "semantic-ui-react/dist/es/elements/Label/Label";

export default class AddNewAdminUser extends React.Component {

  render() {
    return <Container>
      <br/>
      <br/>
      <Segment>
        <Label  size={'medium'} attached='top'>Login Details</Label>
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
                <label className={'Admin-Form-Label'}>sdfsdfssfsdfsdfsdfdf </label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <Form.Input fluid placeholder="Username" />
                </Form.Field>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <label className={'Admin-Form-Label'}>sdffsdf </label>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <Form.Input fluid placeholder="Username" />
                </Form.Field>
              </Grid.Column>

            </Grid.Row>
        </Grid>
        </Form>
        <br/>
      </Segment>
    </Container>
  }

}
