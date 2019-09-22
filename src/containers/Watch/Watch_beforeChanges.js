import React from "react";
import "./Watch.scss";
import { RelatedVideos } from "../../components/RelatedVideos/RelatedVideos";
import { Video } from "../../components/Video/Video";
import { VideoMetadata } from "../../components/VideoMetadata/VideoMetadata";
import { VideoInfoBox } from "../../components/VideoInfoBox/VideoInfoBox";
import { Comments } from "../Comments/Comments";
import { connect } from "react-redux";
import LoadVideoAsynch from "../../store/actions/watch-actions";

// old id: DqUQW3xyQ1c  doll id should be: 3qTm8W2SNhM
function mapStateToProps(state) {
  return {
    snippet: state.snippet,
    stats: state.stats
  };
};

function mapDispatchToProps (dispatch) {
  return {
    onLoadVideo: () => dispatch(LoadVideoAsynch())
  };
};

class Watch extends React.Component {
  render() {
    console.log("watch: qqqq:", this.props.stats);
    console.log("watch: xxxx:", this.props.snippet);
    // if(this.props.item.statistics){
    //     console.log("the stats are in and are: ", this.props.item.statistics);
    //     console.log("the viewCount is: ", this.props.item.statistics.viewCount);
    // }
    return (
      <div className="watch-grid">
        <div></div>
        <Video className="video" id="Ks-_Mh1QhMc" />
        <VideoMetadata
          className="metadata"
          viewCount={this.props.stats.viewCount}
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



export default connect(mapStateToProps,mapDispatchToProps)(Watch);

/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/
