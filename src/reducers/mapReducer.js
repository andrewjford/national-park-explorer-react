function mapReducer(state = {
  center: [37.0902, -95.7129],
  zoom: 4
}, action) {
  switch(action.type){
    case 'SAVE_MAP_POSITION':
      return {...state, center: action.payload.center, zoom: action.payload.zoom}
    default:
      return state;
  }
}

export default mapReducer;
