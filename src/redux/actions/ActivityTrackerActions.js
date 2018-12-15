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

//export default doCheckIn;
