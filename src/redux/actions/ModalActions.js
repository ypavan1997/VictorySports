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
