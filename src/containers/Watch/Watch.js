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
    item: state.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLoadVideo: () => dispatch(LoadVideoAsynch())
  };
};

// old id: DqUQW3xyQ1c  doll id should be: 3qTm8W2SNhM
class Watch extends React.Component {
  render() {
    console.log("this.props.item:", this.props.item);
    // console.log("items are: ", this.props.item);
    // if(this.props.item.statistics){
    //     console.log("the stats are: ", this.props.item.statistics);
    //     console.log("the viewCount is: ", this.props.item.statistics.viewCount);
    // }
    return (
      <div className="watch-grid">
        <div>Title: {this.props.item.title}</div>
        <Video className="video" id="DqUQW3xyQ1c" />
        <VideoMetadata
          className="metadata"
          viewCount={1100}
        />
        <VideoInfoBox className="video-info-box" />
        <Comments className="comments" />
        <RelatedVideos className="related-videos" />
      </div>
    );
  }

  componentDidMount() {
    //this.props.onLoadVideo();
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Watch);

/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/
