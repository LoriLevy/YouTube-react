import React from "react";
import "./AppLayout.scss";
import HeaderNav from "../../containers/HeaderNav/HeaderNav";
//import { SideBar } from "../../containers/SideBar/SideBar";

export function AppLayout(props) {
  return (
    <div className="app-layout">
      <HeaderNav />
      {/* <SideBar /> */}
    </div>
  );
}
