function npsReducer(state = {parks: [], currentPark:{}, centers: []}, action) {
  switch(action.type){
    case 'FETCH_PARKS':
      return {...state, parks: action.payload}
    case 'FETCH_PARK_DETAILS':
      return {...state, currentPark: action.payload };
    case 'FETCH_CENTER':
      if (action.payload[0]){
        var found = state.centers.find((element) => {
          return element.id === action.payload[0]["id"]
        })

        if(found){
          return state;
        }
        else {
          return {...state, centers: [...state.centers, ...action.payload]}
        }
      }
      else {
        return state;
      }
    default:
      return state;
  }
}

export default npsReducer;
