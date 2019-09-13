import {all} from 'redux-saga/effects';

export default function* () {
    yield all([]);
}

/* 
Our sagas will take care of all the asynchronous actions that are dispatched. 
To create a store, bundle all our sagas into one single saga - the root saga. 
The concept is sort of comparable to combining reducers in Redux.
*/