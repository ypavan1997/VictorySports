import { connect } from 'react-redux';
import React from 'react';
import SignInModal from "../SignInModal";
import {hideModal} from "../../redux/actions/ModalActions";

const MODAL_COMPONENTS = {
  'SIGN_IN_MODAL': SignInModal,
};

const ModalRoot = ({ modalId, onClose }) => {
  if (!modalId) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalId];
  return <SpecificModal show={true} onClose={onClose} />
};

const mapStateToProps = (state) => {
  return {
    modalId: state.modal && state.modal.modalId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClose: () => dispatch(hideModal())
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalRoot)
