import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

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
    .then(json => {
      if(json.data){
        // info is from NPS API
        dispatch({
          type: 'FETCH_PARK_DETAILS',
          payload: json.data[0],
        })
        return true;
      }
      else {
        // info is from local db
        dispatch({
          type: 'FETCH_PARK_DETAILS',
          payload: json,
        })
      }
    })
  }
}

export function fetchVisitorCenters(parkCode) {
  return (dispatch) => {
    return fetch(API_URL + `centers?parkCode=`+ parkCode)
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_CENTER',
      payload: json,
    }))
  }
}

export function clearVisitorCenters() {
  return {
    type: 'CLEAR_CENTERS',
  }
}

export function postRating(id, rating) {
  return (dispatch) => {
    return fetch(API_URL + `parks/${id}?rating=` + rating, {
      method: 'PATCH',
     })
    .then(response => response.json())
    .then(json => dispatch({
      type: 'UPDATE_RATING',
      payload: json,
    }))
  }
}
