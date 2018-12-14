import React from 'react'
import { Form, Input, Message, Modal } from 'semantic-ui-react'

export default class SignInModal extends React.Component {

  state = { username: '', pwd: '', username_error: null, pwd_error: null, is_loading: false};

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  handleSubmit = () => {
    const { username, pwd } = this.state;
    let errorPresent = false;
    if (username.length === 0 ) {
      this.setState({username_error: 'Username is empty'});
      errorPresent = true;
    }
    if (pwd.length === 0 ) {
      this.setState({pwd_error: 'Password is empty'});
      errorPresent = true;
    }
    !errorPresent && this.setState({is_loading: true});
    !errorPresent && setTimeout(() => {this.setState({ username: '', pwd: '', username_error: null, pwd_error: null, is_loading: false})}, 2000)
  };

  onModalClose = () => {
    this.setState({ username: '', pwd: '', username_error: null, pwd_error: null, is_loading: false});
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const {show} = this.props;
    const { username, pwd, username_error, pwd_error, is_loading} = this.state;

    return (
      <Modal closeIcon open={show} onClose={this.onModalClose}>
        <Modal.Header icon='archive'>Sign In</Modal.Header>
        <Modal.Content>
          <Form widths={'equal'} size={'large'} error loading={is_loading}>
            <Form.Group widths='equal'>
              <Form.Field required>
                <label>Username</label>
                <Input
                  icon='user' iconPosition='left'
                  placeholder='Enter your username...' name={'username'}  value={username} onChange={this.handleChange} error={username_error !== null}/>
              </Form.Field>
            </Form.Group>
            <Form.Group widths={'equal'}>
              <Form.Field required>
                <label>Password</label>
                <Input
                  icon='lock'
                  iconPosition='left'
                  type="password" placeholder='Enter your password...' name={'pwd'} value={pwd} onChange={this.handleChange} error={pwd_error !== null}/>
              </Form.Field>
            </Form.Group>
            <Form.Button onClick={this.handleSubmit} content='Sign In' primary fluid size={'medium'}/>
            { (username_error || pwd_error) && !is_loading &&
            <Message
              error
              header='Missing Information'
              content={`${username_error ? username_error : ''}  ${pwd_error ? pwd_error : ''}`}
            />}
          </Form>
        </Modal.Content>
      </Modal>
    );
  }
}

