import {YOUTUBE_LIBRARY_LOADED} from '../actions/api';

const initialState = {
    libraryLoaded: false,
}

export default function(state=initialState, action) {
    switch(action.type) {
    
        case YOUTUBE_LIBRARY_LOADED:
            //success! 
        return { libraryLoaded: true }
    
    default: 
        return state;
    }
}

// Use a selector for easier maintenance: getWhatever...
export const getYoutubeLibraryLoaded = (state) => state.api.libraryLoaded;