const initialState = {
    videoData: {}
}

function homeReducer(state = initialState, action) {

    const newState = {...state};

    switch(action.type){
        case 'FETCH_VIDEOS':
            newState.videoData = action.payload;
            return newState;
        default:
            return state;
    }
}

export default homeReducer;