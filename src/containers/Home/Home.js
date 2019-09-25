/* file: src/containers/Home/Home.js */
import React from "react";
import "./Home.scss";
import "./Home-mq.scss";
import HomeContent from "./HomeContent/HomeContent";
import SideBar from "../SideBar/SideBar";

function Home() {
  return (
    <>
      <SideBar />
      <HomeContent />
    </>
  );
}
export default Home;
