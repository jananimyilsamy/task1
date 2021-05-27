import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import DynamicForm from './pages/Forms/DynamicForm';
import PageLoader from './pages/Forms/PageLoader';

import allReducers from './pages/reducers';

import './scss/global.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
const store = createStore (
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__ ()
);

ReactDOM.render (
  <React.StrictMode>
    <Provider store={store}>
      <DynamicForm />
      <PageLoader />
      <App />
    </Provider>

  </React.StrictMode>,
  document.getElementById ('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals ();
