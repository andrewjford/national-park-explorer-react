import SessionApi from '../services/SessionService';

export function loginUser(credentials) {
  return function(dispatch) {
    return SessionApi.login(credentials)
      .then(response => {
        if(response.jwt){
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSuccess());
        }
        else {
          dispatch(loginFailure());
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function loginSuccess() {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export function logoutUser() {
  return function(dispatch){
    sessionStorage.removeItem('jwt');
    dispatch({
      type: 'LOG_OUT'
    })
  }
}

export function changePasswordInput(newInput) {
  return {
    type: 'CHANGE_PASSWORD_INPUT',
    payload: newInput,
  }
}

export function changeEmailInput(newInput) {
  return {
    type: 'CHANGE_EMAIL_INPUT',
    payload: newInput,
  }
}

export function openLoginWindow() {
  return {
    type: 'OPEN_LOGIN_WINDOW'
  }
}

export function closeLoginWindow() {
  return {
    type: 'CLOSE_LOGIN_WINDOW'
  }
}

export function clearLoginInput() {
  return {
    type: 'CLEAR_LOGIN_INPUT'
  }
}

export function loginFailure() {
  return {
    type: 'LOGIN_FAILURE'
  }
}
