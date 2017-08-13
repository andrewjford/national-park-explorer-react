function npsReducer(state = {parks: [], currentPark:{} }, action) {
  switch(action.type){
    case 'FETCH_PARKS':
      return {...state, parks: action.payload}
    case 'FETCH_PARK_DETAILS':
      return {...state, currentPark: action.payload };
    default:
      return state;
  }
}

export default npsReducer;
