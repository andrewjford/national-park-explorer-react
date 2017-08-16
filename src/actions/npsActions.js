import fetch from 'isomorphic-fetch';

const API_URL = 'http://localhost:3001/';

export function fetchParks() {

  return (dispatch) => {

    return fetch(API_URL + 'parks')
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_PARKS',
      payload: json,
    }))
  }
}

export function fetchPark(id) {
  return (dispatch) => {
    return fetch(API_URL + `nps/parks/${id}`)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_PARK_DETAILS',
      payload: json.data[0],
    }))
  }
}

export function fetchVisitorcenters(parkCode) {
  return (dispatch) => {
    return fetch(API_URL + `centers?parkCode=`+ parkCode)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_CENTER',
      payload: json,
    }))
  }
}
