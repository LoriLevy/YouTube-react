import React from "react";
import { Menu, Divider } from "semantic-ui-react";
import "./SideBar.scss";
import { SideBarHeader } from "./SideBarHeader/SideBarHeader";
import { SideBarItem } from "./SideBarItem/SideBarItem";
import { SideBarFooter } from "./SideBarFooter/SideBarFooter";

export class SideBar extends React.Component {
  render() {
    return (
      // fixed='left' is display: fixed
      <Menu borderless vertical stackable fixed="left" className="side-nav">
        <SideBarItem highlight={true} label="Home" icon="home" />
        <Divider className="divider-color" />
        <SideBarHeader title="Happening Now" />
        <SideBarItem label="Trending" icon="fire" />
        <SideBarItem label="Followers" icon="spy" />
        <Divider className="divider-color" />
        <SideBarHeader title="Your Library" />
        <SideBarItem label="History" icon="history" />
        <SideBarItem label="Watch later" icon="clock" />
        <SideBarItem label="Liked videos" icon="thumbs up" />
        <Divider className="divider-color" />
        <SideBarHeader title="More from ViewTube" />
        <SideBarItem label="Movies and Shows" icon="film" />
        <SideBarItem label="Report history" icon="flag" />
        <Divider className="divider-color" />
        <SideBarItem label="Help" icon="help circle" />
        <SideBarItem label="Send feedback" icon="comment" />
        <Divider className="divider-color" />
        <SideBarFooter />
      </Menu>
    );
  }
}
