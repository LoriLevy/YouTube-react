
import React from 'react';
import { Icon, Image, Menu } from "semantic-ui-react";
import './Subscription.scss';

export function Subscription(props) {

    let rightEle, emt = null;
    const { broadcasting, amountNewVideos } = props;
    if (broadcasting) {
        rightElement = <Icon name='signal' />;
    }
    else if (amountNewVideos) {
        rightElement = <span className='new-videos-count'>{amountNewVideos}</span>
    }

    return (
        <Menu.Item>
            <div className='subscription'>
                <div>
                    {/* For now use placeholder for the channel icon. 
                    We haven’t connected our app to the Youtube backend yet. */}
                    <Image src='http://via.placeholder.com/28x28' avatar />
                    <span>{props.label}</span>
                </div>
                {rightElement}
            </div>
        </Menu.Item>
    );
}