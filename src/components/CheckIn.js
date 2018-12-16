import React, { Component } from 'react'
import { Button, Card, Form, Select, Icon } from 'semantic-ui-react'

export default class CheckIn extends Component {

    constructor(props) {
        super(props);
        this.getHubs = this.getHubs.bind(this);
        this.getCurrentTime = this.getCurrentTime.bind(this);
    }

  state = {hubList: []};

  componentDidMount() {
    fetch('https://ohack.herokuapp.com/v1/victoryfoundation/hub', {
      method: 'GET'
    }).then (
      res => res.json()
    ). then (result => {
        const opts = []
        result.map((item,i) => opts.push({ text: item.hubName, value: item.hubId, key: i}))
        this.setState({hubList: opts})
      }
    )
  }


    getCurrentTime() {
        let date = new Date();
        let mins = date.getMinutes();
        mins =  mins<10 ? '0'+ mins : mins;
        return date.getHours() + ":" + mins;
    }

    render() {
        return <Form>
            <Form.Field>
            <Select name={'hub'} value={this.props.value.hub} placeholder='Select your hub' options={this.state.hubList} onChange={this.props.onCheckInChange}/>
            </Form.Field>
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
