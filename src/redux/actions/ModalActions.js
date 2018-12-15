export const showModal = modalId => {
  return {
    type: 'SHOW_MODAL',
    modalId,
  }
};

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL',
  }
};


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
