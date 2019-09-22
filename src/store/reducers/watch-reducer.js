/* File: store/reducers/watch-reducer.js */

/* set up the objects for the state */
const initialState = {
    snippet: {},
    stats: {}, 
    id: {}
}

function watchReducer(state = initialState, action) {

    const newState = {...state};

    switch(action.type){
        case 'LOAD_VIDEO':
            /* populate the objects for the state */
            newState.snippet = action.payload.snippet;
            newState.stats = action.payload.statistics;
            newState.id = action.payload.id;
            return newState;
        default:
            return state;
    }
}

export default watchReducer