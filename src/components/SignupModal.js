import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignupForm from './SignupForm';
import FlashMessage from './FlashMessage';
import {
  openLoginWindow,
  closeSignupWindow,
} from '../actions/modalActions';
import { clearLoginInput } from '../actions/sessionActions';

class SignupModal extends React.Component {

  handleOutsideClick = (event) => {
    if(event.target.classList.contains("overlay-blanket")){
      this.props.closeSignupWindow();
      this.props.clearLoginInput();
    }
  }

  render(){
    return <div className="overlay-blanket" onClick={this.handleOutsideClick}>
      <div className="center-overlay">
        <div className="center-relative">
          <h2>Signup</h2>
          <FlashMessage session={this.props.session}/>

          <SignupForm />

          <span>
            Already a member? <a href="" onClick={this.loginLinkClick}>Login</a>
          </span>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => {
  return {
    session: state.session
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    openLoginWindow: openLoginWindow,
    closeSignupWindow: closeSignupWindow,
    clearLoginInput: clearLoginInput,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupModal);
