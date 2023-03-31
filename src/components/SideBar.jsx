import React from "react";
import "../assets/styles/components/SideBar.css";
import NavBar from "./NavBar";
import SearchBox from "./SearchBox";
import Chats from "./Chats";

const SideBar = () => {
  return (
    <div className="side-bar">
      <NavBar />
      <SearchBox />
      <Chats />
    </div>
  );
};

export default SideBar;
