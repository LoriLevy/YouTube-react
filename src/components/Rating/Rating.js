/* file: src/components/Rating/Rating.js */
import React from "react";
import "./Rating.scss";
import { Icon, Progress } from "semantic-ui-react";
import { formatNumberWithCommas } from "../../utilities/format-number";
function Rating(props) {
  let progress = null;
  let likeCount = 0;
  let dislikeCount = 0;
  if (props.likeCount && props.dislikeCount) {
    likeCount = formatNumberWithCommas(props.likeCount);
    dislikeCount = formatNumberWithCommas(props.dislikeCount);
    const percent =
      100 * (props.likeCount / (props.likeCount + props.dislikeCount));
    progress = <Progress className="progress" percent={percent} size="tiny" />;
  }
  return (
    <div className="rating">
      <div className="thumbs-up">
        <Icon name="thumbs outline up" />
        <span>{likeCount}</span>
      </div>
      <div className="thumbs-down">
        <Icon name="thumbs outline down" />
        <span>{dislikeCount}</span>
      </div>
      {progress}
    </div>
  );
}
export default Rating;
