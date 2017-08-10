import fetch from 'isomorphic-fetch';

export function fetchParks() {

  return (dispatch) => {
    return fetch('http://localhost:3001/parks')
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_PARKS',
      payload: json,
    }))
  }

}
