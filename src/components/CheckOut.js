import React, { Component } from 'react'
import { Button, Card, Form, Select, Icon } from 'semantic-ui-react'

export default class CheckOut extends Component {

    constructor(props) {
        super(props);
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }

    getCurrentTime() {
        let date = new Date();
        let mins = date.getMinutes();
        mins =  mins<10 ? '0'+ mins : mins;
        return date.getDate() + "/" +  (date.getMonth()+1) + "/" +  date.getFullYear() + " " + date.getHours() + ":" + mins;
    }

    render() {
        return <Form>
            <Form.Field>
            <Card centered>
                <Card.Content>
                    <Card.Header> <Icon name='time' />{this.getCurrentTime()} </Card.Header>
                </Card.Content>
            </Card>
            </Form.Field>
        </Form>
    }
}
