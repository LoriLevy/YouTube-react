import {createAction} from './index';

export const YOUTUBE_LIBRARY_LOADED = 'YOUTUBE_LIBRARY_LOADED';
export const youTubeLibraryLoaded = createAction.bind(null, YOUTUBE_LIBRARY_LOADED);