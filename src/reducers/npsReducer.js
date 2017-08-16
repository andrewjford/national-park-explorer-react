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
    case 'CLEAR_CENTERS':
      return {...state, centers: []};
    case 'UPDATE_RATING':
      var index = state.parks.findIndex((val) => {
        return val.id === action.payload.id
      })
      return {...state,
        parks: [...state.parks.slice(0,index),
          action.payload,
          ...state.parks.slice(index+1,state.parks.length)]
        }

    default:
      return state;
  }
}

export default npsReducer;
