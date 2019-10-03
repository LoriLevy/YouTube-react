/* File: components/VideoInfoBox/VideoInfoBox.js */
import React from "react";
import "./VideoInfoBox.scss";
import { Image, Button, Message } from "semantic-ui-react";
import moment from "moment";
import { formatNumberWithCommas } from "../../utilities/format-number";

function VideoInfoBox(props) {
  const {video} = props;
  const channelThumbnail = video.snippet.thumbnails.medium.url;
  
  let subscriberCount = props.subscriberCount;
  let subscribers = 0;
  if (subscriberCount > 0) {
     subscribers = formatNumberWithCommas(subscriberCount);
  }
  console.log("channelThumbnail is: ", channelThumbnail);
  return (
    <div className="video-info-box">
      <Image
        className="channel-image"
        src="http://via.placeholder.com/48x48"
        circular
      />
{/* src="http://via.placeholder.com/48x48" */}
      <div className="video-info">
        <Button color="youtube">{subscribers} Subscribers</Button>
        <div className="channel-name">{props.channelTitle}</div>
        <div className="video-pub-date">
          Published: {moment(video.videoPubDate).format("MM-DD-YYYY")}
        </div>

        <div className="video-description">
          <div className="expanded">
            <Message>{video.videoDescription}</Message>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoInfoBox;
