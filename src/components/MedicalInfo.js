import React from 'react'
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Button from "semantic-ui-react/dist/es/elements/Button/Button";

export default class MedicalInfo extends React.Component {


  constructor(props) {
    super(props);
    this.state = { values: [] };
  }

  createUI(){
    return this.state.values.map((el, i) =>
      <React.Fragment key={i}>
        <Grid.Row>
          <Grid.Column textAlign={'left'} mobile={10}>

              <Form.Input name={`desc_${i}`} value={el || ''} fluid placeholder="Medical Description"  label={i===0 && 'Description'} onChange={this.handleChange.bind(this, i)}/>

          </Grid.Column>
          <Grid.Column mobile={6}>
            <Form.Field>
              <Form.Input name={`type_${i}`} value={el || ''} label={i===0 && 'Type'} fluid placeholder="Type" onChange={this.handleChange.bind(this, i)}/>
            </Form.Field>
          </Grid.Column>
        </Grid.Row>
      </React.Fragment>
    )
  }

  handleChange(i, event) {
    let values = [...this.state.values];
    values[i] = event.target.value;
    this.setState({ values });
  }

  addClick(){
    this.setState(prevState => ({ values: [...prevState.values, '']}))
  }



  render() {
    return (
      <Form>
        <Grid doubling >
        {this.createUI()}
        </Grid>
        <br/>
        <Button content='Add more' onClick={this.addClick.bind(this)}/>
      </Form>
    );
  }
}
