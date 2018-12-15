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
