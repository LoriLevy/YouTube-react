import {applyMiddleware, createStore, compose} from 'redux';
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();
    //added composeEnhancers for seeing history of actions
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, 
        composeEnhancers(applyMiddleware(sagaMiddleware))
    );

    sagaMiddleware.run(rootSaga);
    return store;
}

/* returns __REDUX_DEVTOOLS_EXTENSION_COMPOSE__ */