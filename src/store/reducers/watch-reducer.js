const initialState = {
    videoData: {}
}

function watchReducer(state = initialState, action) {

    const newState = {...state};

    switch(action.type){
        case 'LOAD_VIDEO':
            newState.videoData = action.payload;
            return newState;
        default:
            return state;
    }
}

export default watchReducer