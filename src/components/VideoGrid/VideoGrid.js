/* src/components/VideoGrid/VideoGrid.js */
import React, { useEffect } from "react";
import "./VideoGrid.scss";
import { Divider } from "semantic-ui-react";
import VideoPreview from "../VideoPreview/VideoPreview";
import { VideoGridHeader } from "./VideoGridHeader/VideoGridHeader";
import { useSelector, useDispatch } from "react-redux";
import LoadTrendingAsynch from "../../store/actions/trending-action";

function VideoGrid() {
  const myState = useSelector(state => {
    return state.trending;
  });
  
    const gridItems = myState.videoCollection.map(video => {
    return (<VideoPreview video={video} {...video} key={video.id}
      duration={video.contentDetails.duration}
      />);
});
  
  const myDispatch = useDispatch();

  useEffect(() => {
    myDispatch(LoadTrendingAsynch());
  }, [myDispatch]);

  const divider = myState.hideDivider ? null : <Divider />;
  
  return (
    <>
      <VideoGridHeader title={myState.categoryTitle} />
      <div className="video-grid">
        {gridItems}
        {/* moved this to gridItems: 
        {myState.videoCollection.map((video) => {
          return <VideoPreview {...video} key={video.id}
          duration={video.contentDetails.duration}
          />; */}
        })}
      </div>
     {divider} 
    </>
  );
}
export default VideoGrid;
