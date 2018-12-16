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
import {doCheckIn, decreaseStep, increaseStep, updateActivityId, doSessionPlanned, doSessionAS, doPracticeMatch, doDiet, doProps, doGM} from "../redux/actions/ActivityTrackerActions"
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

class HubActivityTracker extends React.Component {

    constructor(props) {
        super(props);
        this.getStepContent = this.getStepContent.bind(this);
        this.getBackButtonDisableStatus = this.getBackButtonDisableStatus.bind(this);
        this.getActiveStep = this.getActiveStep.bind(this);
        this.onCheckInChange = this.onCheckInChange.bind(this);
        this.handleCheckIn = this.handleCheckIn.bind(this);
        this.onSessionPlannedChange = this.onSessionPlannedChange.bind(this);
        this.handleSessionPlanned = this.handleSessionPlanned.bind(this);
        this.onSessionASChange = this.onSessionASChange.bind (this);
        this.handleSessionAS = this.handleSessionAS.bind(this);
        this.onPracticeMatchChange = this.onPracticeMatchChange.bind (this);
        this.handlePracticeMatch = this.handlePracticeMatch.bind(this);
        this.onDietChange = this.onDietChange.bind (this);
        this.onDietImgChange = this.onDietImgChange.bind (this);
        this.handleDiet = this.handleDiet.bind(this);
        this.onPropsChange = this.onPropsChange.bind (this);
        this.onPropsImgChange = this.onPropsImgChange.bind (this);
        this.handleProps = this.handleProps.bind(this);
        this.onGMChange = this.onGMChange.bind (this);
        this.onGMImgChange = this.onGMImgChange.bind (this);
        this.handleGM = this.handleGM.bind(this);
    }

    componentDidMount() {

    }

    getStepContent(step) {
        switch (step) {
            case 0:
                return <CheckIn value={this.props.checkIn} onCheckInChange={this.onCheckInChange}/>;
            case 1:
                return <SessionPlanned value={this.props.sessionPlanned} onSessionPlannedChange={this.onSessionPlannedChange}/>;
            case 2:
                return <SessionAS value={this.props.sessionAS} onSessionASChange={this.onSessionASChange}/>;
            case 3:
                return <PracticeMatch value={this.props.practiceMatch} onPracticeMatchChange={this.onPracticeMatchChange}/>;
            case 4:
                return <Diet value={this.props.diet} onDietChange={this.onDietChange} onDietImgChange={this.onDietImgChange}/>;
            case 5:
                return <Props value={this.props.props} onPropsChange={this.onPropsChange} onPropsImgChange={this.onPropsImgChange}/>;
            case 6:
                return <GroundMarking value={this.props.groundMarking} onGMChange={this.onGMChange} onGMImgChange={this.onGMImgChange}/>;
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


    onSessionPlannedChange(e, {name, value}) {
        this.props.doSessionPlanned(
            {
                [name]: value
            }
        );
    }

    onSessionASChange(e, {name, value}) {
        this.props.doSessionAS(
            {
                [name]: value
            }
        );
    }

    onPracticeMatchChange(e, {name, value, checked}) {

        if(name === 'isPracticeMatch') {
            this.props.doPracticeMatch(
                {
                    [name]: checked
                }
            );
        } else  {
            this.props.doPracticeMatch(
                {
                    [name]: value
                }
            );
        }
    }

    onDietChange(e, {name, value}) {
        this.props.doDiet(
            {
                [name]: value
            }
        );
    }

    onDietImgChange(fileItems) {
        this.props.doDiet(
            {
                image1: fileItems.map(fileItem => fileItem.file)
            }
        );
    }

    onPropsChange(e, {name, value}) {
        this.props.doProps(
            {
                [name]: value
            }
        );
    }

    onPropsImgChange(fileItems) {
        this.props.doProps(
            {
                image1: fileItems.map(fileItem => fileItem.file)
            }
        );
    }

    onGMChange(e, {name, value}) {
        this.props.doGM(
            {
                [name]: value
            }
        );
    }

    onGMImgChange(fileItems) {
        this.props.doGM(
            {
                image1: fileItems.map(fileItem => fileItem.file)
            }
        );
    }

    handleCheckIn(){
        let formData = new FormData();
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','CHECK-IN');
        formData.append('description', 'Check In');

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handleSessionPlanned(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','SESSIONS PLAN');
        formData.append('description', 'Session Plan');
        formData.append('note1', this.props.sessionPlanned.description);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
        }

    handleSessionAS(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','SESSIONS AIM and SCHEDULE');
        formData.append('description', 'Session Aim');
        formData.append('note1', this.props.sessionAS.aim);
        formData.append('note2', this.props.sessionAS.schedule);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handlePracticeMatch(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','PRACTICE MATCH');
        formData.append('description', 'Practice Match');
        formData.append('note1', this.props.practiceMatch.isPracticeMatch);
        formData.append('note2', this.props.practiceMatch.venue);
        formData.append('note3', this.props.practiceMatch.against);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handleDiet(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','DIET');
        formData.append('description', 'Diet');
        formData.append('note1', this.props.diet.description);
        formData.append('image1', this.props.diet.image1 && this.props.diet.image1[0]);
        //formData.append('image2', this.props.diet.image2);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handleProps(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','PROPS');
        formData.append('description', 'Props');
        formData.append('note1', this.props.diet.description);
        formData.append('image1', this.props.diet.image1 && this.props.diet.image1[0]);
        //formData.append('image2', this.props.diet.image2);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handleGM(){
        let formData = new FormData();
        formData.append('activity_id', this.props.activityId);
        formData.append('coach_id', 111);
        formData.append('hub_id', this.props.checkIn.hub);
        formData.append('action_type','GROUND_MARKING');
        formData.append('description', 'Ground Marking');
        formData.append('note1', this.props.diet.description);
        formData.append('image1', this.props.diet.image1 && this.props.diet.image1[0]);
        //formData.append('image2', this.props.diet.image2);

        fetch('https://ohack.herokuapp.com/v1/victoryfoundation/file/activitydetail', {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            body: formData, // body data type must match "Content-Type" header
        })
            .then(res => res.json())
            .then(response => {
                console.log('Success:', JSON.stringify(response));
                this.props.updateActivityId(response && response.activity && response.activity.id)
            })
            .catch(error => console.error('Error:', error));
    }

    handleNext = () => {
        switch (this.props.activeStep) {
            case 0:
                this.handleCheckIn();
                break;
            case 1:
                this.handleSessionPlanned();
                break;
            case 2:
                this.handleSessionAS();
                break;
            case 3:
                this.handlePracticeMatch();
                break;
            case 4:
                this.handleDiet();
                break;
            case 5:
                //this.handlePracticeMatch();
                break;
            case 6:
                //this.handlePracticeMatch();
                break;
            case 7:
                //this.handlePracticeMatch();
                break;
            case 8:
                //this.handlePracticeMatch();
                break;
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

    getActiveStep(){
        let step=0;
        if(this.props.activityId) {
            step=1
        }
        return step;
    }

    getBackButtonDisableStatus() {
        if(this.props.activeStep === 0) {
            return true;
        }
        if(this.props.activeStep === 1 && this.props.activityId != null) {
            return true
        }
    }

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
                                                disabled={this.getBackButtonDisableStatus()}
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
        activityId: state.activityTracker.activityId,
        checkIn: state.activityTracker.checkIn,
        sessionPlanned: state.activityTracker.sessionPlanned,
        sessionAS: state.activityTracker.sessionAS,
        practiceMatch: state.activityTracker.practiceMatch,
        diet: state.activityTracker.diet,
        props: state.activityTracker.props,
        groundMarking: state.activityTracker.groundMarking
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
        doSessionPlanned: (data) => dispatch(doSessionPlanned(data)),
        doSessionAS: (data) => dispatch(doSessionAS(data)),
        doPracticeMatch: (data) => dispatch(doPracticeMatch(data)),
        doDiet: (data) => dispatch(doDiet(data)),
        doProps: (data) => dispatch(doProps(data)),
        doGM: (data) => dispatch(doGM(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HubActivityTracker));
