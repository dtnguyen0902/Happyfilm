import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './redux/reducer/rootReducers';
import thunk from 'redux-thunk';
import {Router} from 'react-router-dom'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const history = createBrowserHistory()
const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)))
// Pha62nn ày lát a kêu Nguyên commit lên hen, giờ e code lại phần hqa em làm cho Nguyên
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
        <App />

        </Router>
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
