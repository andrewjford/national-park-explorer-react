function userReducer(state = {ratings: {}, submitted: []}, action) {
  switch(action.type){
    case 'CHANGE_RATING_INPUT':
      return {...state, ratings: {...state.ratings,
        [action.payload.park]: action.payload.rating }}
    // case 'FLAG_SUBMITTED':
    //   return {...state, submitted:[...state.submitted, action.payload] }
    default:
      return state;
  }
}

export default userReducer;
