import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from "react-datepicker/es/index";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import HubActivityItems from "./HubActivityItems";
import { Divider, Header, Icon } from 'semantic-ui-react'
import {store} from "../index";
import {addOpenActivity} from "../redux/actions/OpenActivityActions";
import connect from "react-redux/es/connect/connect";
import _ from "lodash";
import Table from "semantic-ui-react/dist/es/collections/Table/Table";
import Checkbox from "semantic-ui-react/dist/es/modules/Checkbox/Checkbox";


const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    actionsContainer: {
        marginBottom: theme.spacing.unit * 2,
    },
    resetContainer: {
        padding: theme.spacing.unit * 3,
    },
});

const initalState = {
    startDate: null
}

class LandingPage extends React.Component {

    getYesterDayDate() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        date.setHours(0,0,0,0);
        return date;
    }

    state = {  startDate: this.getYesterDayDate() };

    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDateChange(this.getYesterDayDate());
    }

    handleDateChange(date) {
        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/activities/'+date.getTime()/1000+'/review')
            .then(response => response.json())
            .then(data => {
                if(data) {
                    store.dispatch(addOpenActivity(data));
                }
                this.setState({
                    startDate: date
                });
            });
    }

    render() {
        const { startDate } = this.state;
        const { history, openActivity } = this.props;
        return (
            <Form>
                <Grid doubling >
                    <React.Fragment>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <Header as='h2' icon textAlign='center'>
                                    <Icon name='clipboard list' circular />
                                    <Header.Content>Recent Hub Activities</Header.Content>
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={2}>
                                <label className={'Admin-Form-Label'}>Date </label>
                            </Grid.Column>
                            <Grid.Column width={8}>
                                <DatePicker
                                    selected={startDate}
                                    placeholderText="Click to select a date"
                                    maxDate={new Date()}
                                    showDisabledMonthNavigation
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode="select"
                                    dateFormat="dd/MM/yyyy"
                                    onChange={this.handleDateChange}
                                />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                <Divider horizontal>
                                    <Header as='h4'>
                                        <Icon name='envelope outline' />
                                        Open items for review
                                    </Header>
                                </Divider>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
                                {_.map(openActivity.activity, activity =>
                                    <HubActivityItems history={history} activity={activity} activityDate={ this.state.startDate}/>
                                )}
                            </Grid.Column>
                        </Grid.Row>
                    </React.Fragment>
                </Grid>
            </Form>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object,
};

function mapStateToProps(state) {
    return {
        openActivity: state.openActivity
    }
}

export default connect(
    mapStateToProps,
    null
)(LandingPage);
