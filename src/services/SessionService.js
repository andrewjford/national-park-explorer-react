import fetch from 'isomorphic-fetch';

const API_URL = process.env.REACT_APP_API_URL;

class SessionApi {
  static login(credentials) {
    const request = new Request(API_URL+'login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({auth: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      });
  }

  static signup(credentials) {
    const request = new Request(API_URL+'signup', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      });
  }
}

export default SessionApi;
