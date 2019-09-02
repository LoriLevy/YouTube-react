import React from 'react';
import './Watch.scss';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';


export class Watch extends React.Component {
  render() {
    return (
      <>
        {/* Static for now */}
        <VideoPreview horizontal={true}/>
        <VideoPreview />
        </>
    );
  }
}