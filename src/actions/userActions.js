import SessionApi from '../services/SessionService';

export function changeRatingInput(park, newRating) {
  return {
    type: 'CHANGE_RATING_INPUT',
    payload: {park: park, rating: newRating}
  }
}

export function flagSubmitted(parkCode) {
  return {
    type: 'FLAG_SUBMITTED',
    payload: parkCode,
  }
}

export function signupUser(credentials) {
  return function(dispatch) {
    return SessionApi.signup(credentials)
      .then(response => {
        if(response.jwt){
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(signupSuccess());
        }
        else {
          dispatch(signupFailure());
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function signupSuccess() {
  return {
    type: 'LOGIN_SUCCESS'
  }
}

export function signupFailure(message) {
  return {
    type: 'SIGNUP_FAILURE',
    payload: message,
  }
}
