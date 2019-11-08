import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
<<<<<<< HEAD
import { createBrowserHistory } from 'history'
=======
import { Router, Route, Link } from 'react-router-dom';
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducer/rootReducers';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import {Router} from 'react-router-dom'
=======
import { createBrowserHistory } from 'history';
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory()
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
<<<<<<< HEAD
// Pha62nn ày lát a kêu Nguyên commit lên hen, giờ e code lại phần hqa em làm cho Nguyên
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <App />

=======
const history = createBrowserHistory()
ReactDOM.render(
    <Provider store={store} >
        <Router history={history}>
            <App />
>>>>>>> 6c2f398291e05d18d6ca35ab371f1095ce281d49
        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
