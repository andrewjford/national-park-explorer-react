import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeEmailInput,
  changePasswordInput,
  closeLoginWindow,
  clearLoginInput,
  loginUser
} from '../actions/sessionActions';

class Login extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();

    let formInput = {
      email: this.props.session.input.email,
      password: this.props.session.input.password
    }

    this.props.loginUser(formInput);
    alert(this.props.session.input.password);
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

  render() {
    return <div className="overlay-blanket" onClick={this.handleOutsideClick}>
      <div className="center-overlay">
        <div className="center-relative">
          <h2>Login</h2>
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
