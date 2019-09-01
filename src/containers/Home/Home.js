import React from "react";
import "./Home.scss";
import "./Home-mq.scss";
import { VideoGrid } from "../../components/VideoGrid/VideoGrid";
import { SideBar } from "../SideBar/SideBar";

export class Home extends React.Component {
  render() {
    return (
      <>
        <SideBar />
        <div className="home">
          <div className="video-grid-container">
            <VideoGrid title="Trending" />
            <VideoGrid title="Antique Dolls" hideDivider={true} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
