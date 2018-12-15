import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import DatePicker from "react-datepicker/es/index";

import "react-datepicker/dist/react-datepicker.css";

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
        super(props)
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDateChange(this.getYesterDay());
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
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <DatePicker
                    placeholderText="Click to select a date"
                    maxDate={new Date()}
                    showDisabledMonthNavigation
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    dateFormat="dd/MM/yyyy"
                    onChange={this.handleDateChange}
                />
            </div>
        );
    }
}

LandingPage.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(LandingPage);
