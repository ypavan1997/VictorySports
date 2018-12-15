import React, { Component } from 'react'
import { Form, Radio, TextArea } from 'semantic-ui-react'

export default class PracticeMatch extends Component {

    constructor(props) {
        super(props);
        this.state = {isPracticeMatch: false};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (e, { checked }) => {
        this.setState({isPracticeMatch: checked})
    }

    render() {
        return <Form>
            <Form.Field>
                <label>Is it a practice match</label>
                <Radio toggle onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Venue</label>
                <TextArea autoHeight placeholder='Max 100 characters' rows={1} disabled={!this.state.isPracticeMatch}/>
            </Form.Field>
            <Form.Field>
                <label>Against whom?</label>
                <TextArea autoHeight placeholder='Max 100 characters' rows={1} disabled={!this.state.isPracticeMatch}/>
            </Form.Field>
        </Form>
    }
}
