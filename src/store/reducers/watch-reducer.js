const initialState = {
    item: {
        viewCount: null,
        title: null,
        id: null
    }
}

function watchReducer(state = initialState, action) {

    const newState = {...state};

    switch(action.type){
        case 'LOAD_VIDEO':
            newState.item.viewCount = action.payload.statistics.viewCount;
            newState.item.title = action.payload.snippet.title;
            newState.item.id = action.payload.id;
            console.log("newState: ", newState);
            return newState;
        default:
            return state;
    }
}

export default watchReducer;