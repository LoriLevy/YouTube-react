import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";
import { connect } from 'react-redux';
import LoadVideoAsynch from '../../store/actions/watch-actions';

const mapStateToProps = (state) => {
  return {
    videoData: state.videoData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadVideo: () => dispatch(LoadVideoAsynch())   
  }
}

class Watch extends React.Component {
  render() {
    return (
      <div className="watch-grid">
        <div>{this.props.videoData.channelTitle}</div>
        
        <Video className="video" id="DqUQW3xyQ1c" />
        <VideoMetadata className="metadata" viewCount={1100} />
        <VideoInfoBox className="video-info-box" />
        <Comments className="comments" />
        <RelatedVideos className="related-videos" />
      </div>
    );
  }

  componentDidMount() {
    this.props.onLoadVideo();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);

/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/
