import React from "react";
import "../assets/styles/pages/Home.css";
import SideBar from "../components/SideBar";
import ChatWindow from "../components/ChatWindow";

const Home = () => {
  return (
    <div className="home">
      <div className="home-container">
        <SideBar />
        <ChatWindow />
      </div>
    </div>
  );
};

export default Home;
