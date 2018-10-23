/* eslint-disable import/default */
import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom'
import MyRoute from './MyRoute';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.dev';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles/stylemain.css';
import 'bootstrap/dist/js/bootstrap.min.js'

const store = configureStore();

render(
    <Provider store={store}>
        <MyRoute />
    </Provider>,
    document.getElementById('app')
);
