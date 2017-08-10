function npsReducer(state = {parks: []}, action) {
  switch(action.type){
    case 'FETCH_PARKS':
      return {...state, parks: action.payload}
    default:
      return state;
  }
}

export default npsReducer;
