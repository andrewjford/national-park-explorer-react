import fetch from 'isomorphic-fetch';

export function fetchVisitorCenters() {

  return (dispatch) => {
    return fetch('https://developer.nps.gov/api/v0/alerts', {
      method: 'get',
      headers: {
        'Authorization': "7CFC0AE5-8AFA-466A-A85D-01E715C13D39",
      }
    })
    .then(response => response.json())
    .then(json => dispatch({
      type: 'FETCH_VISITORCENTERS',
      payload: json,
    }))
    .catch(error => console.log(error))
  }

}
