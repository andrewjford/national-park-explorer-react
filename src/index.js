import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { combineReducers } from 'redux';
import npsReducer from './reducers/npsReducer';
import mapReducer from './reducers/mapReducer';
import userReducer from './reducers/userReducer';
import siteReducer from './reducers/siteReducer';
import sessionReducer from './reducers/sessionReducer';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  nps: npsReducer,
  map: mapReducer,
  user: userReducer,
  site: siteReducer,
  session: sessionReducer,
});

const store = createStore(
  rootReducer, composeWithDevTools(applyMiddleware(thunk),)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
