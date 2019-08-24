import React from 'react';
import { Subscription } from '../Subscription/Subscription';
import { Divider } from 'semantic-ui-css';
import { SideBarHeader } from './SideBarHeader/SideBarHeader';

export class Subscriptions extends React.Component {
    render() {
        return (
            <>
                <SideBarHeader title='Subscriptions' />
                <Subscription label='MusicChannel' broadcasting />
                <Subscription label='React' amountNewVideos={10} />
                <Subscription label='Coursea' amountNewVideos={10} />
                <Subscription label='TedX Talks' amountNewVideos={10} />
                <Subscription label='Standford iOS' amountNewVideos={10} />
                <Subscription label='Udacity' amountNewVideos={10} />
                <Divider />
            </>
        );
    }
}