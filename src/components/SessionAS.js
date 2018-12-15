import React, { Component } from 'react'
import { Form, TextArea } from 'semantic-ui-react'

export default class SessionAS extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <Form>
                <Form.Field>
                    <label>Please enter the session aim</label>
                    <TextArea autoHeight placeholder='Max 500 characters' style={{ minHeight: 100 }} />
                </Form.Field>
                <Form.Field>
                    <label>Please enter the session schedule</label>
                    <TextArea autoHeight placeholder='Max 500 characters' style={{ minHeight: 100 }} />
                </Form.Field>

        </Form>
    }
}
