/* file: src/components/VideoPreview/VideoPreview.js */
import React from "react";
import { Image } from "semantic-ui-react";
import "./VideoPreview.scss";
import {
  getVideoDurationString,
  formatNumberWithCommas
} from "../../utilities/format-number";
import moment from "moment";

function VideoPreview(props) {
  console.log("props are: ", props);
  const horizontal = props.horizontal ? "horizontal" : null;
  const duration = props.contentDetails ? props.contentDetails.duration : null;
  const videoDuration = getVideoDurationString(duration);
  //console.log("videoDuration:", videoDuration);
  const views = props.statistics.viewCount ? props.statistics.viewCount : "0";
  let viewCount = formatNumberWithCommas(views);
  //let days = moment.duration(moment(new Date()).diff(moment(props.snippet.publishedAt)));
  let daysAgo = Math.round(
    moment
      .duration(moment(new Date()).diff(moment(props.snippet.publishedAt)))
      .asDays()
  );

  
  const numberOfDays = daysAgo.toString();
  const singular = " day ago";
  const plural = " days ago ";
  const thumbnaillUrl = `${props.snippet.thumbnails.medium.url}`  
  let howMany = daysAgo === 1 ? numberOfDays.concat(singular) : numberOfDays.concat(plural);
  
  return (
    <div className={["video-preview", horizontal].join(" ")}>
      <div className="image-container">
        <Image src={thumbnaillUrl} />
        <div className="time-label">
          <span>{videoDuration}</span>
        </div>
      </div>

      <div className="video-info">
        <div className="semi-bold show-max-two-lines">{props.snippet.localized.title}</div>
        <div className="video-preview-metadata-container">
          <div className="channel-title">{props.snippet.channelTitle}</div>
          <div>
            <span>{viewCount} views • {howMany}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoPreview;
