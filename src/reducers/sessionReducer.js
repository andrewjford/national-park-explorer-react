function sessionReducer(
  state = {session: !!sessionStorage.jwt,
    input: {email: "", password: ""},
    loginOpen: false
  }, action) {

  switch(action.type){
    case "CHANGE_EMAIL_INPUT":
      return {...state, input: {...state.input, email: action.payload}}
    case "CHANGE_PASSWORD_INPUT":
      return {...state, input: {...state.input, password: action.payload}}
    case "OPEN_LOGIN_WINDOW":
      return {...state, loginOpen: true}
    case "CLOSE_LOGIN_WINDOW":
      return {...state, loginOpen: false}
    case "CLEAR_LOGIN_INPUT":
      return {...state, input: {email: "", password: ""}}
    case "LOGIN_SUCCESS":
      return {...state, input: {email: "", password: ""}, session: !!sessionStorage.jwt}
    default:
      return state;
  }
}

export default sessionReducer;
