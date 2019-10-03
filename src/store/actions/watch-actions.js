/* File: store/actions/watch-actions.js */
import * as constants from "../../constants";

let channelId = "UCAuUUnT6oDeKwE6v1NGQxug";
let videoId = "Ks-_Mh1QhMc";
let videoUrl = `${constants.VIDEO_URL}?key=${constants.API_KEY}&part=snippet,statistics,id&id=${videoId}&fields=*`;
let subscriberCountUrl=`${constants.SUBSCRIPTIONS_URL}&id=${channelId}&key=${constants.API_KEY}`;

function LoadVideo(videoData) {
  return {
    type: "LOAD_VIDEO",
    payload: videoData
  };
}

function LoadVideoAsynch() {
  return dispatch => {
    async function getData() {
      try {
        console.log(videoUrl);
        // Fetch #1
        const response = await fetch(videoUrl);
        const video = await response.json();
        // Get the channel ID for this video
        const channelId = video.items.map(obj =>  obj.snippet.channelId);
        console.log("channelId is:", channelId);
        // Fetch # 2 for the channel ID's subscriber count
        const response2 = await fetch(subscriberCountUrl);
        const Subscribers = await response2.json();
        console.log("Subscribers Data: ", Subscribers);
        
        // Pull the subscriber count from Fetch #2 and add it the to state statistics from Fetch #1
        video.items[0].statistics.subscriberCount = Subscribers.items[0].statistics.subscriberCount;
        console.log("video.items[0] is:", video.items[0]);
        dispatch(LoadVideo(video.items[0]));        
      } catch (err) {
        console.log("error: ", err);
      }
    }
    getData();
  };
}

export default LoadVideoAsynch;

