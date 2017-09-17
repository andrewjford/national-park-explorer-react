import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

export function fetchSites() {
  return (dispatch) => {
    return fetch(API_URL + 'sites')
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_SITES',
      payload: json,
    }))
  }
}
