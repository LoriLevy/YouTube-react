/* src/containers/Home/HomeContent/HomeContent.js */
/* file: src/containers/Home/HomeContent/HomeContent.js */
import React from "react";
import VideoGrid from "../../../components/VideoGrid/VideoGrid";
import "./HomeContent.scss";
import "./HomeContent-mq.scss";

function HomeContent(props) {
    
      return (
        <div className="home-content">
            <div className="responsive-video-grid-container">
                <VideoGrid title="{props.categoryTitle}" />
                <VideoGrid title="Antique Dolls" hideDivider={true} />
            </div>
        </div>
      );
  }
  export default HomeContent;
