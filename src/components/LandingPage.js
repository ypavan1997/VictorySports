import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker/es/index";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";
import HubActivityItems from "./HubActivityItems";
import { Divider, Header, Icon } from 'semantic-ui-react'


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
        return date;
    }

    state = {  startDate: this.getYesterDayDate() };

    constructor(props) {
        super(props);
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        const { startDate } = this.state;
        const { history } = this.props;
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
                                <HubActivityItems history={history}/>
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

export default withStyles(styles)(LandingPage);
