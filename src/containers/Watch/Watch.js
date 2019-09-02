import React from 'react';
import './Watch.scss';
import {VideoPreview} from '../../components/VideoPreview/VideoPreview';
import {RelatedVideos} from '../../components/RelatedVideos/RelatedVideos';
import { Divider } from 'semantic-ui-react';

export class Watch extends React.Component {
  render() {
    return (
      <>
        {/* Static for now */}
        <VideoPreview horizontal={true}/>
        <RelatedVideos/>
        </>
    );
  }
}