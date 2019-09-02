import React from 'react';
import './VideoGridHeader.scss';

export function VideoGridHeader(props) {
  return (
    <div className='video-grid-header'>
      <h4 className='video-category-title'>{props.title}</h4>
    </div>
  );
}
