/* src/components/VideoMetadata/VideoMetadata.js */

import React from 'react';
import {Button, Divider, Icon } from 'semantic-ui-react';
import './VideoMetadata.scss';
import Rating from '../Rating/Rating';

function VideoMetadata(props) {

    const viewCount = Number(props.viewCount).toLocaleString() || '';
    const likeCount = Number(props.likeCount).toLocaleString() || '';
    const dislikeCount = Number(props.dislikeCount).toLocaleString() || '';
    const videoTitle = props.videoTitle || '';

    return (
    <div className="video-metadata">
        <h3>{videoTitle}</h3>
        <div className="video-stats">
            <span>{viewCount} Views</span>
            <div className="video-actions">
                <Rating likeCount={likeCount}  dislikeCount={dislikeCount} />
                <Button basic icon labelPosition="left">
                    <Icon name="share" />
                    Share
                </Button>

                <Button basic icon>
                    <Icon name="ellipsis horizontal" />
                </Button>
            </div>
        </div>
        <Divider />
    </div>
   );
}
export default VideoMetadata;