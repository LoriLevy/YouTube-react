
/* File: store/sagas/index.js */
/* Used with SAGA */

//import {all} from 'redux-saga/effects';
import {all, call, put, fork} from 'redux-saga/effects';
import {watchMostPopularVideos} from './videos';

export default function* () {
    /* all is everything in the array below */
    yield all([
        fork(watchMostPopularVideos)
    ]);
}

/* function* means it is a GENERATOR function, which creates a GENERATOR  object.
Our sagas will take care of all the asynchronous actions that are dispatched. 
To create a store, bundle all sagas into one single saga - the root saga. 
The concept is sort of comparable to combining reducers in Redux.
Calling a generator function doesn't execute its body immediately; 
an iterator object for the function is returned instead. 

Excerpted from developer.Mozilla.org
Generators are functions which can be exited and later re-entered. Their context is saved across re-entrances, so basically,
it is a function that behaves like an iterator. The keyword yield pauses execution, and returns the current value to the caller
or may delegate to another generator function. 

The next() method returns an object with a value property containing the yielded value and a done property which 
indicates whether the generator has yielded its last value, as a boolean. 

Calling the next() method with an argument resumes generator function execution, 
and replaces the yield expression where execution was paused with the argument from next().

Any time a return statement in a generator is executed, the generator finishes and the done property of the object returned by it is set to true. 
Any value returned is set as the value property of the object returned by the generator.
Any error thrown inside the generator will make the generator finished unless caught within the generator's body.
When a generator is finished, subsequent next calls just return the object as: {value: undefined, done: true}.
*/

/*
* entity must have a success, request and failure method
* request is a function that returns a promise when called
* */

/* [This is the main caller to the API from here on out]
***** parameters for fetchEntity Generator *****
request returns a promise, 
entity is an obj that has a request, success and failure function. That’s pretty much anything we import from src/store/actions
...args means that we can call this function with an arbitrary amount of arguments 
*/
export function* fetchEntity(request, entity, ...args) {
    try {
      const response = yield call(request);
      // we directly return the result object and throw away the headers and the status text here
      // if status and headers are needed, then return return just response instead of response.result
      yield put(entity.success(response.result, ...args));
      console.log(response.result);
    } catch (error) {
      yield put(entity.failure(error, ...args));
    }
  }