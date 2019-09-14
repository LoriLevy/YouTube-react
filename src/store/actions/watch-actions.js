const API = 'your_api_key'

const result = 1;
const searchList = "antique dolls %7C antique miniature dolls"; //%7C is the pipe symbol
const sortBy = "relevance" //date, rating, relevance, title, viewCount

let finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&q=${searchList}&part=snippet,id&order=${sortBy}&region=581&relevanceLanguage=en_US&publishedAfter=2019-01-01T00:00:00Z&regionCode=US&maxResults=${result}`

function LoadVideo(snippet) {
    return {
      type: 'LOAD_VIDEO',
      payload: snippet 
      }
}

function LoadVideoAsynch() {
    return (dispatch) => {
        fetch(finalURL)
            .then((response) => response.json())
            .then((responseJson) => {
                // console.log(responseJson);
                const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/" + obj.id.videoId);
                //this.setState({ resultyt });
                console.log(responseJson);
                dispatch(LoadVideo(responseJson.items[0].snippet));
            })
            .catch((error) => {
                console.error(error);
            });
        // setTimeout(function() {
        //     dispatch(LoadVideo())
        
        // }, 5000)
    }
}

export default LoadVideoAsynch;