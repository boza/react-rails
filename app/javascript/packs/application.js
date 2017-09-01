/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb
import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import Page from './components/page';

import { createStore } from 'redux'

const store = createStore(
  ()=>{},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = ({ store, ...props }) => (
  <Page {...{ props }} />
)

render(
  <Provider store={ store } key="store">
    <App store={store} />
  </Provider>,
  document.getElementById('app')
)
