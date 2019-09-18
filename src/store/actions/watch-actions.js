/* File: store/actions/watch-actions.js */

const api_key = 'AIzaSyB9AGzlKUzrgdfhytySl-WqFcbdM3gxDgc';
const googleUri = 'https://www.googleapis.com/youtube/v3/videos';
let searchList = "antique dolls %7C antique miniature dolls"; //%7C is the pipe symbol
let sortBy = "relevance" //date, rating, relevance, title, viewCount
let language='en_US';
let result = 1;
let videoId="Ks-_Mh1QhMc"
//let searchUrl = `${googleUri}?key=${api_key}&q=${searchList}&part=snippet,contentDetails,statistics,id&order=${sortBy}&relevanceLanguage=${language}&publishedAfter=2019-01-01T00:00:00Z&maxResults=${result}`
//most popular Videos query:
// `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&key=api_key`
//https://www.googleapis.com/youtube/v3/videos?part=contentDetails&chart=mostPopular&regionCode=US&maxResults=25&key=api_key
// https://www.googleapis.com/youtube/v3/videos?key=${api_key}&&part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))
//let searchUrl="https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2C+status%2CtopicDetails&chart=mostPopular&maxResults=2&regionCode=US&fields=etag%2Citems(ageGating%2CcontentDetails%2Cetag%2CfileDetails%2Cid%2Ckind%2Csnippet%2Cstatistics%2Cstatus%2CtopicDetails)&key=${api_key}"
//let searchUrl = "https://www.googleapis.com/youtube/v3/videos?key=AIzaSyB9AGzlKUzrgdfhytySl-WqFcbdM3gxDgc&part=snippet%2CcontentDetails%2Cstatistics%2Cid&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))"
let searchUrl = `${googleUri}?key=${api_key}&part=snippet,contentDetails,statistics,id&id=${videoId}&fields=items(id,snippet,statistics(commentCount,likeCount,viewCount))`;

function LoadVideo(props) {
    return {
      type: 'LOAD_VIDEO',
      payload: props 
      }
}


function LoadVideoAsynch() {
    return dispatch => {
      fetch(searchUrl)
        .then(response => response.json())
        .then(responseJson => {
          console.log(responseJson.items[0]);
          dispatch(LoadVideo(responseJson.items[0]));
        })
        .catch(error => {
          console.error(error);
        });
    };
  }

export default LoadVideoAsynch;