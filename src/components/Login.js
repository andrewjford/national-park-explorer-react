import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  changeEmailInput,
  changePasswordInput,
} from '../actions/sessionActions';

class Login extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleEmailChange = (event) => {
    this.props.changeEmailInput(event.target.value);
  }

  handlePasswordChange = (event) => {
    this.props.changePasswordInput(event.target.value);
  }

  render() {
    return <div className="overlay-blanket">
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
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
