import React from "react";
import "./Home.scss";
import "./Home-mq.scss";
import { HomeContent } from "./HomeContent/HomeContent";
import  SideBar from "../SideBar/SideBar";

export class Home extends React.Component {
  
  render() {
    return (
      <>
        <SideBar />
        <HomeContent/>  
      </>
    );
  } 
}

export default Home;

