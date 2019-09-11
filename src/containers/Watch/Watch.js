import React from 'react';
import './Watch.scss';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';

export class Watch extends React.Component {
  render() {
    return (
        <div className='watch-grid'>
          <Video className='video' id='DqUQW3xyQ1c' />
          <VideoMetadata className='metadata' viewCount={1000} />
          <div className='video-info-box'>video-info-box</div>
          <div className='comments'>Comments</div>
        
        <RelatedVideos className='related-videos'/>
        </div>
    );
  }
}