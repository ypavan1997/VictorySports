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
import {doCheckIn, decreaseStep, increaseStep, updateActivityId} from "../redux/actions/ActivityTrackerActions"
import { connect } from 'react-redux';

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

/*function getStepContent(step) {
    switch (step) {
        case 0:
            return <CheckIn hub={this.props.checkIn} onChange={this.props.onCheckInChange}/>;
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
}*/

class HubActivityTracker extends React.Component {

    constructor(props) {
        super(props);
        this.getStepContent = this.getStepContent.bind(this);
        this.onCheckInChange = this.onCheckInChange.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        //this.updateActivityId = this.updateActivityId.bind(this);
    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return <CheckIn value={this.props.checkIn} onCheckInChange={this.onCheckInChange}/>;
            case 1:
                return <SessionPlanned />;
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

    onCheckInChange(e, {name, value}) {
        this.props.doCheckIn(
            {
                [name]: value
            }
        );
    }

    handleCheckIn(){
        let data = {
            coach_id:1,
            hub_id:this.props.checkIn.hub,
            action_type: "CHECK-IN",
            description:"Check In"
        };
        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                //"Content-Type": "application/json; charset=utf-8",
                 "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        })
            .then(response => {
                let result = response.json();
                //this.props.updateActivityId(result && result.activity && result.activity.id)
            });
        this.props.updateActivityId(1112);
    }

    handleNext = () => {
        /*this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));*/
        switch (this.props.activeStep) {
            case 0:
                this.handleCheckIn();
            default:
                return 'Unknown step';
        }

        this.props.increaseStep();
    };

    handleBack = () => {
        /*this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));*/
        this.props.decreaseStep();
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        //const { activeStep } = this.props.activeStep;

        return (
            <div className={classes.root}>
                <Stepper activeStep={this.props.activeStep} orientation="vertical">
                    {steps.map((label, index) => {
                        return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{this.getStepContent(index)}</Typography>
                                    <div className={classes.actionsContainer}>
                                      <br/>
                                        <div>
                                            <Button
                                                disabled={this.props.activeStep === 0}
                                                onClick={this.handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button primary
                                                onClick={this.handleNext}
                                                className={classes.button}
                                            >
                                                {this.props.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        );
                    })}
                </Stepper>
                {this.props.activeStep === steps.length && (
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

//export default withStyles(styles)(HubActivityTracker);

function mapStateToProps(state, ownProps) {
    return {
        activeStep: state.activityTracker.activeStep,
        checkIn: state.activityTracker.checkIn
    };
}

// give access to dispatch from this component (access via props)
/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
    return {
        doCheckIn: (data) => dispatch(doCheckIn(data)),
        increaseStep: () => dispatch(increaseStep()),
        decreaseStep: () => dispatch(decreaseStep()),
        updateActivityId: (id) => dispatch(updateActivityId(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HubActivityTracker));
