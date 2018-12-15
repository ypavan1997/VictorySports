import React from 'react';
import PropTypes from 'prop-types';
import CheckIn from "./CheckIn";
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Breadcrumb from "semantic-ui-react/dist/es/collections/Breadcrumb/Breadcrumb";

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Check-in', 'Session Plan & Schedule', 'Diet', 'Photos', 'Practice Match', 'Attendance', 'Checkout'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <CheckIn/>;
        case 1:
            return 'Session Plan & Schedule';
        case 2:
            return 'Diet';
        case 3:
            return 'Photos';
        case 4:
            return 'Practice Match';
        case 5:
            return 'Attendance';
        case 6:
            return 'Checkout';
        default:
            return 'Unknown step';
    }
}

class HubActivityTest extends React.Component {
    state = {
        activeStep: 0,
        skipped: new Set(),
    };

    isStepOptional = step => {
        return false;
    };

    handleNext = () => {
        const { activeStep } = this.state;
        let { skipped } = this.state;
        if (this.isStepSkipped(activeStep)) {
            skipped = new Set(skipped.values());
            skipped.delete(activeStep);
        }
        this.setState({
            activeStep: activeStep + 1,
            skipped,
        });
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleSkip = () => {
        const { activeStep } = this.state;
        if (!this.isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        this.setState(state => {
            const skipped = new Set(state.skipped.values());
            skipped.add(activeStep);
            return {
                activeStep: state.activeStep + 1,
                skipped,
            };
        });
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    isStepSkipped(step) {
        return this.state.skipped.has(step);
    }

    render() {
        return (<div class="ui steps">
            <div class="step">
                <i class="truck icon"></i>
                <div class="content">
                    <div class="title">Shipping</div>
                    <div class="description">Choose your shipping options</div>
                </div>
            </div>
            <div class="active step">
                <i class="payment icon"></i>
                <div class="content">
                    <div class="title">Billing</div>
                    <div class="description">Enter billing information</div>
                </div>
            </div>
            <div class="disabled step">
                <i class="info icon"></i>
                <div class="content">
                    <div class="title">Confirm Order</div>
                </div>
            </div>
        </div>

    );
    }
}

HubActivityTest.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HubActivityTest);
