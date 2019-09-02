import React from 'react';
import './RelatedVideos.scss';
import {VideoPreview} from '../VideoPreview/VideoPreview';
import {NextUpVideo} from './NextUpVideo/NextUpVideo';

export function RelatedVideos(props) {
    return (
        <div className='related-videos'> 
        <NextUpVideo/>
        {/* Static for now . . . . */}
            <VideoPreview horizontal={'true'} />
            <VideoPreview horizontal={'true'} />
            <VideoPreview horizontal={'true'} />
            
        </div>
    );
}