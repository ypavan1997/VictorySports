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
                <Radio toggle name={'isPracticeMatch'} value={this.props.value.description} onChange={this.props.onPracticeMatchChange}/>
            </Form.Field>
            <Form.Field>
                <label>Venue</label>
                <TextArea autoHeight placeholder='Max 100 characters' rows={1} disabled={!this.props.value.isPracticeMatch} name={'venue'} value={this.props.value.venue} onChange={this.props.onPracticeMatchChange}/>
            </Form.Field>
            <Form.Field>
                <label>Against whom?</label>
                <TextArea autoHeight placeholder='Max 100 characters' rows={1} disabled={!this.props.value.isPracticeMatch} name={'against'} value={this.props.value.against} onChange={this.props.onPracticeMatchChange}/>
            </Form.Field>
        </Form>
    }
}
