function sessionReducer(
  state = {session: !!sessionStorage.jwt,
    input: {email: "", password: "", passwordConfirm: ""},
    message: ""
  }, action) {

  switch(action.type){
    case "CHANGE_EMAIL_INPUT":
      return {...state, input: {...state.input, email: action.payload}}
    case "CHANGE_PASSWORD_INPUT":
      return {...state, input: {...state.input, password: action.payload}}
    case "CHANGE_PASSWORD_CONFIRM_INPUT":
      return {...state, input: {...state.input, passwordConfirm: action.payload}}
    case "CLEAR_LOGIN_INPUT":
      return {...state, input: {email: "", password: ""}}
    case "LOGIN_SUCCESS":
      return {...state, input: {email: "", password: ""}, session: !!sessionStorage.jwt}
    case "LOGIN_FAILURE":
      return {...state, input: {email: state.input.email, password: ""}, message: "Improper email/password."}
    default:
      return state;
  }
}

export default sessionReducer;
