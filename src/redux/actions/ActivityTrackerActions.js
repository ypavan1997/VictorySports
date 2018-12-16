export function increaseStep() {
    return {
        type: 'INCREASE_STEP',
    }
};

export function decreaseStep() {
    return {
        type: 'DECREASE_STEP',
    }
};

export function updateActivityId(id) {
    return {
        type: 'UPDATE_ACTIVITY_ID',
        data: id
    }
};

export function doCheckIn(data) {
    return {
        type: 'CHECK_IN',
        data:data
    }
};

export function doSessionPlanned(data) {
    return {
        type: 'SESSION_PLANNED',
        data:data
    }
};



export function doSessionAS(data) {
    return {
        type: 'SESSION_AS',
        data:data
    }
};

export function doPracticeMatch(data) {
    return {
        type: 'PRACTICE_MATCH',
        data:data
    }
};



export function doDiet(data) {
    return {
        type: 'DIET',
        data:data
    }
};

export function doProps(data) {
    return {
        type: 'PROPS',
        data:data
    }
};

export function doGM(data) {
    return {
        type: 'GROUND_MARKING',
        data:data
    }
};
//export default doCheckIn;
