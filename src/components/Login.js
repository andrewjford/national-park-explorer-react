import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FlashMessage from './FlashMessage';
import {
  changeEmailInput,
  changePasswordInput,
  clearLoginInput,
  loginUser
} from '../actions/sessionActions';
import {
  closeLoginWindow,
  openSignupWindow
 } from '../actions/modalActions';

class Login extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    let formInput = {
      email: this.props.session.input.email,
      password: this.props.session.input.password
    }

    this.props.loginUser(formInput);
  }

  handleEmailChange = (event) => {
    this.props.changeEmailInput(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.props.changePasswordInput(event.target.value);
  }

  handleOutsideClick = (event) => {
    if(event.target.classList.contains("overlay-blanket")){
      this.props.closeLoginWindow();
      this.props.clearLoginInput();
    }
  }

  handleSignupClick = (event) => {
    event.preventDefault();
    this.props.openSignupWindow();
    this.props.closeLoginWindow();
  }

  render() {
    return <div className="overlay-blanket" onClick={this.handleOutsideClick}>
      <div className="center-overlay">
        <div className="center-relative">
          <h2>Login</h2>
          <FlashMessage session={this.props.session}/>

          <form className="flex-vertical" onSubmit={this.handleSubmit}>
            <input type="text"
              placeholder="Email"
              value={this.props.session.input.email}
              onChange={this.handleEmailChange}/>
            <br/>
            <input type="password"
              placeholder="Password"
              value={this.props.session.input.password}
              onChange={this.handlePasswordChange}/>
            <button type="submit" className="center-button">
              Login
            </button>
          </form>

          <span>
            Not a member? <a href="" onClick={this.handleSignupClick}>Sign Up</a>
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
    changeEmailInput: changeEmailInput,
    changePasswordInput: changePasswordInput,
    closeLoginWindow: closeLoginWindow,
    clearLoginInput: clearLoginInput,
    loginUser: loginUser,
    openSignupWindow: openSignupWindow,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
