function modalReducer(
  state = {
    loginOpen: false,
    signupOpen: false,
  }, action) {

  switch(action.type){
    case "OPEN_LOGIN_WINDOW":
      return {...state, loginOpen: true}
    case "CLOSE_LOGIN_WINDOW":
      return {...state, loginOpen: false}
    case "OPEN_SIGNUP_WINDOW":
      return {...state, signupOpen: true}
    case "CLOSE_SIGNUP_WINDOW":
      return {...state, signupOpen: false}
    default:
      return state;
  }
}

export default modalReducer;
