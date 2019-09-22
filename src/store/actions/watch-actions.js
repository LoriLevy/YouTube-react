/* File: store/actions/watch-actions.js */

const api_key = "AIzaSyB9AGzlKUzrgdfhytySl-WqFcbdM3gxDgc";
const googleUri = "https://www.googleapis.com/youtube/v3/videos";

let videoId = "Ks-_Mh1QhMc";
let searchUrl = `${googleUri}?key=${api_key}&part=snippet,statistics,id&id=${videoId}&fields=*`;

function LoadVideo(videoData) {
  return {
    type: "LOAD_VIDEO",
    payload: videoData
  };
}

/* This is converted from using promises to using async and await */
function LoadVideoAsynch() {
  return dispatch => {
    async function getData() {
      try {
        const response = await fetch(searchUrl);
        const result = await response.json();
        dispatch(LoadVideo(result.items[0]));
        throw "Testing an error!";
      } catch (err) {
        console.log("error: ", err);
        //TODO: Look up throwing errors and try it....
      }
    }
    getData();
  };
}

export default LoadVideoAsynch;
