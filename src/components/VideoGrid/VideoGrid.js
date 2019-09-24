import React from 'react';
import './VideoGrid.scss';
import { Divider } from 'semantic-ui-react';
import VideoPreview from '../VideoPreview/VideoPreview';
import { VideoGridHeader } from './VideoGridHeader/VideoGridHeader';

function VideoGrid(props) {
  const divider = props.hideDivider ? null : <Divider />;
  return (
    <>
      <VideoGridHeader title={props.title} />

      <div className='video-grid'>
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
        <VideoPreview />
      </div>
      {divider}
    </>
  );
}
export default VideoGrid;
