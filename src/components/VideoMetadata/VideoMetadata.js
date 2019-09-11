import React from 'react';
import {Button, Divider, Icon } from 'semantic-ui-react';
import './VideoMetadata.scss';
import {Rating} from '../Rating/Rating';
export function VideoMetadata(props) {
    
    
    const viewCount = Number(props.viewCount).toLocaleString() || '';
    
    return (
    <div className="video-metadata">
        <h3>Video Title</h3>
        <div className="video-stats">
            <span>{viewCount} Views</span>
            <div className="video-actions">
                <Rating likeCount={1000}  dislikeCount={100} />
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