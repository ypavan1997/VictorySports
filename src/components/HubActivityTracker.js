import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import {Button} from 'semantic-ui-react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CheckIn from './CheckIn'
import SessionPlanned from './SessionPlanned'
import SessionAS from './SessionAS'
import PracticeMatch from './PracticeMatch'
import Diet from './Diet'
import Props from './Props'
import GroundMarking from './GroundMarking'
import Attendance from './Attendance'
import Checkout from './CheckOut'

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

function getSteps() {
    return ['Check-in', 'Session Planning', 'Session Aim & Schedule', 'Practice Match', 'Diet', 'Props', 'Ground Marking', 'Attendance', 'Checkout'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return <CheckIn/>;
        case 1:
            return <SessionPlanned/>;
        case 2:
            return <SessionAS/>;
        case 3:
            return <PracticeMatch/>;
        case 4:
            return <Diet/>;
        case 5:
            return <Props/>;
        case 6:
            return <GroundMarking/>;
        case 7:
            return <Attendance/>;
        case 8:
            return <Checkout/>;
        default:
            return 'Unknown step';
    }
}

class HubActivityTracker extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;

        return (
            <div className={classes.root}>
                <Stepper activeStep={activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContent(index)}</Typography>
                                    <div className={classes.actionsContainer}>
                                      <br/>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button primary
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStep === steps.length && (
                    <Paper square elevation={0} className={classes.resetContainer}>
                        <Typography>All steps completed - you&apos;re finished</Typography>
                        <Button onClick={this.handleReset} className={classes.button}>
                            Reset
                        </Button>
                    </Paper>
                )}
            </div>
        );
    }
}

HubActivityTracker.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(HubActivityTracker);
