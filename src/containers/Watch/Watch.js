import React from 'react';
import './Watch.scss';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';

export class Watch extends React.Component {
  render() {
    return (
        <div className='watch-grid'>
          <Video className='video' id='DqUQW3xyQ1c' />
          <div className='metadata'>Metadata</div>
          <div className='video-info-box'>video-info-box</div>
          <div className='comments'>Comments</div>
        
        <RelatedVideos className='related-videos'/>
        </div>
    );
  }
}