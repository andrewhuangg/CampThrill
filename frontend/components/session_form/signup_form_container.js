import React from 'react';
import { connect } from 'react-redux';
import { signup, removeErrors } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ errors }) => {
  return ({
    errors: errors.session,
    formType: 'signup',
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    processForm: (user) => dispatch(signup(user)),
    removeErrors: () => dispatch(removeErrors()),
    otherForm: (
      <button className="otherFormBtn" onClick={() => dispatch(openModal('login'))}>
        Log in
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  });
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(SessionForm);