import 'styles/app.scss';

// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router'

import createStore from './redux/create';
import history from './history'
import { setAuthToken, handleResponse } from './axiosExtensions';

import App from './App';

if (localStorage.getItem('CRM-jwt-client')) {
  setAuthToken(localStorage.getItem('CRM-jwt-client'));
}

handleResponse();

const store = createStore();

ReactDOM.render(
    <Router history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>,
    document.getElementById('app')
)
