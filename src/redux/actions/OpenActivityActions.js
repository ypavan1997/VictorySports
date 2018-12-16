export const addOpenActivity = (data) => {
    return {
        type: 'ADD_OPEN_ACTIVITY',
        data
    }
};

export const addCurrentActivity = (data) => {
    console.log(data);
    return {
        type: 'ADD_CURRENT_ACTIVITY',
        data
    }
};
