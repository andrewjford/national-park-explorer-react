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
    default:
      return state;
  }
}

export default modalReducer;
