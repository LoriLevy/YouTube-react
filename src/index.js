/* File: index.js */
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import {  Provider  } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import watchReducer from './store/reducers/watch-reducer';
import trendingReducer from './store/reducers/videos-reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    video: watchReducer,
    trending: trendingReducer 
});


//const store = createStore(watchReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
