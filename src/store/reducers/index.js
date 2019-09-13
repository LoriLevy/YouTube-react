
export default function(state={}, action) {
    switch(action.type) {
        default:
            return state;
    }
}

/* Reducers calculate the next state based on the current state */
/* Reducers don't change the state but, return a new object if something was changed */

/* The actions dispatched via Redux are synchronous. 
However, in order to reach out to the network, we need the ability to dispatch actions asynchronously. 
One of the most popular ways that allows us to do that is redux-thunk.

Redux-saga is more powerful and that's what I am going to use in this app. */