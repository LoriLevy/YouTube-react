/* file: src/components/RelatedVideos/NextUpVideo/NextUpVideo.js */
import React from 'react';
import './NextUpVideo.scss';
import { Checkbox, Divider } from 'semantic-ui-react';
import VideoPreview from '../../VideoPreview/VideoPreview';


function NextUpVideo(props) {
    return (
        <>
        <div className='next-up-container'>
            <h4> Up Next</h4>
            <div className='up-next-toggle'>
                <span>Autoplay</span>
                <Checkbox toggle defaultChecked/>
            </div>
        </div>
        <VideoPreview horizontal={true}/>
        <Divider />
        </>
    );
}
export default NextUpVideo;