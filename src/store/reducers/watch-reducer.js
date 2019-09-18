const initialState = {
    snippet: {},
    stats : {}
}

function watchReducer(state = initialState, action) {

    const newState = {...state};

    switch(action.type){
        case 'LOAD_VIDEO':
            newState.snippet = action.payload.snippet;
            newState.stats = action.payload.statistics;
            return newState;
        default:
            return state;
    }
}

export default watchReducer