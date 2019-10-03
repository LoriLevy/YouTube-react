/* File: src/containers/Watch/Watch.js */
import React, { useEffect } from "react";
import "./Watch.scss";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import Video from "../../components/Video/Video";
import VideoMetadata from "../../components/VideoMetadata/VideoMetadata";
import VideoInfoBox from "../../components/VideoInfoBox/VideoInfoBox";
import Comments from "../Comments/Comments";
import { useSelector, useDispatch } from "react-redux";
import LoadVideoAsynch from "../../store/actions/watch-actions";

function Watch() {
  const myState = useSelector(state => {
    return { snippet: state.video.snippet, stats: state.video.stats, id: state.video.id  };
  });

  const myDispatch = useDispatch();


  //instead of mapPropsTo State we are doing this
  useEffect(() => {
    myDispatch(LoadVideoAsynch());
  }, [myDispatch]);
    
  //console.log("snippet.id: ", myState.id);
  return (
    <div className="watch-grid">
      <Video className="video" id={myState.id} />
      <VideoMetadata
        className="metadata"
        videoTitle={myState.snippet.title}
        viewCount={myState.stats.viewCount}
        likeCount={myState.stats.likeCount}
        dislikeCount={myState.stats.dislikeCount}
      />
      <VideoInfoBox
        className="video-info-box"
        channelTitle={myState.snippet.channelTitle}
        videoPubDate={myState.snippet.publishedAt}
        videoDescription={myState.snippet.description}
        subscriberCount = {myState.stats.subscriberCount}
       
      />
      <Comments className="comments" />
      <RelatedVideos className="related-videos" />
    </div>
  );
}

export default Watch;

/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/
