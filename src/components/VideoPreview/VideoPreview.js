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
  const {video} = props;
  const horizontal = props.horizontal ? "horizontal" : null;
  const duration = video.contentDetails ? video.contentDetails.duration : null;
  const videoDuration = getVideoDurationString(duration);
  const views = video.statistics.viewCount ? video.statistics.viewCount : "0";
  let viewCount = formatNumberWithCommas(views);
  // round the number of days since typically the returned value contains a decimal
  let daysAgo = Math.round(
    moment
      .duration(moment(new Date()).diff(moment(video.snippet.publishedAt)))
      .asDays()
  );

  // if it was one day ago, it should be "1 day ago"; if more than one day, it should be "days ago"
  const numberOfDays = daysAgo.toString();
  const singular = " day ago";
  const plural = " days ago ";
  let howMany = daysAgo === 1 ? numberOfDays.concat(singular) : numberOfDays.concat(plural);

  const thumbnaillUrl = `${video.snippet.thumbnails.medium.url}`

  return (
    <div className={["video-preview", horizontal].join(" ")}>
      <div className="image-container">
        <Image src={thumbnaillUrl} />
        <div className="time-label">
          <span>{videoDuration}</span>
        </div>
      </div>

      <div className="video-info">
        <div className="semi-bold show-max-two-lines">{video.snippet.localized.title}</div>
        <div className="video-preview-metadata-container">
          <div className="channel-title">{video.snippet.channelTitle}</div>
          <div>
            <span>{viewCount} views • {howMany}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VideoPreview;
