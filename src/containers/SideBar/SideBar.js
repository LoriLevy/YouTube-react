import React from 'react';
import { Menu, Divider } from 'semantic-ui-react';
import './SideBar.scss';
import { SideBarItem } from './SideBarItem/SideBarItem';
import { SideBarFooter } from './SideBarFooter/SideBarFooter';

export class SideBar extends React.Component {
    render() {
        return (
            <Menu borderless vertical stackable fixed='left' className='side-nav'>
                <SideBarItem highlight={true} label='Home' icon='home' />
                <SideBarItem label='Trending' icon='fire' />
                <SideBarItem label='Followers' icon='spy' />
                <Divider className="divider-color" />
                <SideBarItem label='History' icon='history' />
                <SideBarItem label='Watch later' icon='clock' />
                <SideBarItem label='Liked videos' icon='thumbs up' />

                <Divider className="divider-color" />
                <SideBarItem label='Movies and Shows' icon='film' />
                <SideBarItem label='Report history' icon='flag' />
                <Divider className="divider-color" />label='Help' icon='help circle' />
                <SideBarItem label='Send feedback' icon='comment' />
            </Menu>
        );
    }
}