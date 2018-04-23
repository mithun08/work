import React from 'react';
import ReactDOM from 'react-dom';
import logger from 'redux-logger'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {  Redirect ,Router } from 'react-router-dom';
import {  BrowserRouter,Route  } from 'react-router-dom'
import reduxThunk from 'redux-thunk';
import routes from './routes';
import reducers from './reducers/index';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(reduxThunk,logger)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('container'));
