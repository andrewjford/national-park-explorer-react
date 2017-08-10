function npsReducer(state = {visitorCenters: []}, action) {
  switch(action.type){
    case 'FETCH_VISITORCENTERS':
      return {...state, visitorCenters: action.payload}
    default:
      return state;
  }
}

export default npsReducer;
