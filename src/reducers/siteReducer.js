function siteReducer(state = {sites: []}, action) {
  switch(action.type){
    case 'FETCH_SITES':
      return {...state, sites: action.payload}
    default:
      return state;
  }
}

export default siteReducer;
