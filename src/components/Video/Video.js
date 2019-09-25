/* file: src/components/Video/Video.js */
import React from 'react';
import './Video.scss';

const BASE_EMBED_URL = 'https://www.youtube.com/embed/';

 function Video(props) {
    if(!props.id) {
        return null;
    }
    
    const embedUrl = `${BASE_EMBED_URL}${props.id}?autoplay=0`;
    return(
        <div className='video-container'>
            <div className='video'>
                <iframe width={'560'} height={'350'} src={embedUrl} frameBorder='0'
                allow='autoplay; encrypted-media' allowFullScreen title={'video'}/> 
            </div>
        </div>                
    );
 }
 export default Video;