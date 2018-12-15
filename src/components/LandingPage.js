import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker/es/index";
import "react-datepicker/dist/react-datepicker.css";
import Grid from "semantic-ui-react/dist/es/collections/Grid/Grid";
import Segment from "semantic-ui-react/dist/es/elements/Segment/Segment";
import Form from "semantic-ui-react/dist/es/collections/Form/Form";

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

class LandingPage extends React.Component {

    constructor(props) {
        super(props);
        this.handleDateChange(this.getYesterDay());
        this.handleDateChange = this.handleDateChange.bind(this);
    }

    handleDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    getYesterDay() {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        return date;
    }

    render() {
        const { startDate } = this.props;

        return (
            <Form>
                <Grid doubling >
                    <React.Fragment>
                        <Grid.Row centered>
                            <Grid.Column width={10}>
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
