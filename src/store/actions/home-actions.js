const api_key = 'your_api_key';
const googleUri = 'https://www.googleapis.com/youtube/v3/search';

let searchList = "antique dolls %7C antique miniature dolls"; //%7C is the pipe symbol
let sortBy = "relevance" //date, rating, relevance, title, viewCount
let language='en_US';
let result = 12;

let searchUrl = `${googleUri}?key=${api_key}&q=${searchList}&part=snippet,id&order=${sortBy}&relevanceLanguage=${language}&publishedAfter=2019-01-01T00:00:00Z&maxResults=${result}`


//https://www.googleapis.com/youtube/v3/videos?key=${api_key}&part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))
function LoadHomeVideo(snippet) {
    return {
      type: 'LOAD_VIDEO',
      payload: snippet 
      }
}

function LoadHomeVideoAsynch() {
    return (dispatch) => {
        fetch(searchUrl)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                console.log(responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId));
                
                console.log(responseJson);
                dispatch(LoadHomeVideo(responseJson.items[0].snippet));
            })
            .catch((error) => {
                console.error(error);
            });
    }
}

export default LoadHomeVideoAsynch;