export const API_KEY = "YOUR_API_KEY";

export const VIDEO_URL = "https://www.googleapis.com/youtube/v3/videos";
export const SUBSCRIPTIONS_URL = "https://www.googleapis.com/youtube/v3/channels?part=statistics";
export const TRENDING_URL = "https://www.googleapis.com/youtube/v3/videos?region=581&relevanceLanguage=en_US&publishedAfter=2019-01-01T00:00:00Z&regionCode=US&part=snippet,id,recordingDetails,contentDetails,statistics&chart=mostPopular"
export const MAX_RESULTS = "12"
export const SNIPPET_FIELDS = "items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount)"
/* 
https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&fields=items(id%2Csnippet%2Cstatistics(commentCount%2ClikeCount%2CviewCount))&key=AIzaSyB9AGzlKUzrgdfhytySl-WqFcbdM3gxDgc
*/