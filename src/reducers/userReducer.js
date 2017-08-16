function userReducer(state = {ratings: []}, action) {
  switch(action.type){
    case 'CHANGE_RATING_INPUT':
      return {...state, ratings: {...state.ratings,
        [action.payload.park]: action.payload.rating }}
    default:
      return state;
  }
}

export default userReducer;
