import React from 'react';
import './Watch.scss';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import {Video} from '../../components/Video/Video';
import {VideoMetadata} from '../../components/VideoMetadata/VideoMetadata';
import {VideoInfoBox} from '../../components/VideoInfoBox/VideoInfoBox';

export class Watch extends React.Component {
  render() {
    return (
        <div className='watch-grid'>
          <Video className='video' id='DqUQW3xyQ1c' />
          <VideoMetadata className='metadata' viewCount={1000} />
          <VideoInfoBox className='video-info-box'/>
          <div className='comments'>Comments</div>
        
        <RelatedVideos className='related-videos'/>
        </div>
    );
  }
}

{/* Syntax to produce inline css means double curly braces and comma instead of semicolon
<div className='comments' style={{width: '100%', height: '100px', background: '#9013FE'}}>comments</div>
*/}