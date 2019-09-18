/* File: store/reducers/videos.js */
import {MOST_POPULAR} from '../actions/videos';
import {SUCCESS} from '../actions';

const initialState = {
    byID: {},
    mostPopular: {}
}

function videos(state = initialState, action) {
    switch(action.type) {
        case MOST_POPULAR[SUCCESS]:
                return reduceFetchMostPopularVideos(action.response, state)
    
        default: 
            return state;
    }
}

function reduceFetchMostPopularVideos(response, prevState) {
    const videoMap = response.items.reduce((accumulator, video) => {
      accumulator[video.id] = video;
      return accumulator;
    }, {});
 
    /* videoMap is a dictionary where we associate each video with its id. 
    This videoMap gets merged into our byId object later  */
    let items = Object.keys(videoMap);
    if (response.hasOwnProperty('prevPageToken') && prevState.mostPopular) {
      items = [...prevState.mostPopular.items, ...items];
    }
  
    const mostPopular = {
      totalResults: response.pageInfo.totalResults,
      /* When I send along a nextPageToken, the server’s response will contain a prevToken property. 
      By checking whether prevToken is there, I know if I fetched some videos from this endpoint or not. 
      If prevToken isn't there, then I haven’t stored anything from the endpoint yet. */
      nextPageToken: response.nextPageToken,
      items,
    };
  
    return {
      ...prevState,
      mostPopular,
      byId: {...prevState.byId, ...videoMap},
    };
  }

  export default videos
