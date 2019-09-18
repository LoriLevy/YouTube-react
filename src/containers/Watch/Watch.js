import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";
import { connect } from "react-redux";
import LoadVideoAsynch from "../../store/actions/watch-actions";

const mapStateToProps = state => {
  return {
    snippet: state.snippet,
    stats: state.stats
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVideo: () => dispatch(LoadVideoAsynch())
  };
};

class Watch extends React.Component {
  render() {
    console.log("this.props.stats: ", this.props.stats);
    console.log("this.props.snippet:" , this.props.snippet);
    return (
      <div className="watch-grid">
        <div>{this.props.snippet.channelTitle}</div>

        <Video className="video" id="DqUQW3xyQ1c" />
        <VideoMetadata
          className="metadata"
          viewCount={this.props.stats.commentCount}
        />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watch);

/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/
