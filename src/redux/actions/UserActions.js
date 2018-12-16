export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        user
    }
};

export const addUserRole = (userRole) => {
    return {
        type: 'ADD_USER_ROLE',
        userRole
    }
};
