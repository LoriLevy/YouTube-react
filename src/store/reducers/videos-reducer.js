/* File: store/reducers/videos-reducer.js */

/* set up the objects for the state */
const initialState = {
  videoCollection: [], 
  categoryTitle: "Trending",
  hideDivider: false
};

function trendingReducer(state = initialState, action) {
  const newState = { ...state };

  switch (action.type) {
    case "TRENDING_VIDEOS":
      /* populate the objects for the state */

      newState.videoCollection = action.payload;
      return newState;

    default:
      return state;
  }
}

export default trendingReducer;
