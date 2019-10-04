/* File: store/actions/trending-actions.js */

import * as constants from "../../constants";

// set up the url for the api call
const trendingUrl = `${constants.TRENDING_URL}&maxResults=${constants.MAX_RESULTS}&key=${constants.API_KEY}`;

function LoadTrendingVideos(videos) {
  return {
    type: "TRENDING_VIDEOS",
    payload: videos
  };
}

function LoadTrendingAsynch() {
  return dispatch => {
    async function getData() {
      try {
        const response = await fetch(trendingUrl);
        //console.log("URL ", trendingUrl);
        const videos = await response.json();
        console.log("VIDEOS ARE: ",videos);
        dispatch(LoadTrendingVideos(videos.items));        
      } catch (err) {
        console.log("error: ", err);
      }
    }
    getData();
  };
}

export default LoadTrendingAsynch;
