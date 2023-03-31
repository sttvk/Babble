import React, { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import "../assets/styles/components/ChatWindow.css";
import Messages from "./Messages";
import TextBox from "./TextBox";

const ChatWindow = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat-window">
      <div className="chat-window-container">
        <span>{data.user?.displayName}</span>
      </div>
      <Messages />
      <TextBox />
    </div>
  );
};

export default ChatWindow;
