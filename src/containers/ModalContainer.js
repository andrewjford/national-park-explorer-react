import React from 'react';
import { connect } from 'react-redux';

import Login from '../components/Login';
import SignupModal from '../components/SignupModal';

class ModalContainer extends React.Component {
  render() {

    return <div>
      {this.props.modal.loginOpen ? <Login /> : null}
      {this.props.modal.signupOpen ? <SignupModal /> : null}
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    modal: state.modal
  }
}

export default connect(mapStateToProps)(ModalContainer);
