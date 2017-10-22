import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signupUser } from '../actions/userActions';
import {
  changeEmailInput,
  changePasswordInput,
  changeConfirmInput,
} from '../actions/sessionActions';

class SignupForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();

    let formInput = {
      email: this.props.session.input.email,
      password: this.props.session.input.password,
      password_confirmation: this.props.session.input.passwordConfirm
    }

    this.props.signupUser(formInput);
  }

  handleEmailChange = (event) => {
    this.props.changeEmailInput(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.props.changePasswordInput(event.target.value);
  }

  handleConfirmChange = (event) => {
    this.props.changeConfirmInput(event.target.value);
  }

  render() {
    return (
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
        <input type="password"
          placeholder="Confirm Password"
          value={this.props.session.input.passwordConfirm}
          onChange={this.handleConfirmChange}/>
        <button type="submit" className="center-button">
          Signup
        </button>
      </form>
    )
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
    signupUser: signupUser,
    changeConfirmInput: changeConfirmInput,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
