const initialState = {
    activeStep: 0,
    checkIn:{},
    sessionPlanned:{},
    sessionAS:{},
    practiceMatch: {},
    diet:{},
    props:{},
    groundMarking:{},
    attendance:{},
    checkOut:{}
};

const activityTrackerReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'INCREASE_STEP':
          return Object.assign({}, state, { activeStep: state.activeStep+1 });
      case 'DECREASE_STEP':
          return Object.assign({}, state, { activeStep: state.activeStep-1 });
      case 'CHECK_IN':
          return Object.assign({}, state, { checkIn: action.data });
      case 'UPDATE_ACTIVITY_ID':
          return Object.assign({}, state, { activityId: action.data });
      default:
      return state
  }
};

export default activityTrackerReducer;
