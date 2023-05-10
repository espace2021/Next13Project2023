'use client';
import React from "react";
import { auth } from "../../firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";

import DeleteMessage from "./DeleteMessage";

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  console.log(message.avatar);
  return (
     <div
      className={`chat-bubble ${message.uid === user.uid ? "right" : ""}`}>
       
      <img
        className="chat-bubble__left"
        src={message.avatar}
        alt="user avatar"
      />
      <div className="chat-bubble__right">
        <p className="user-name">{message.name}</p>
        <p className="user-message">{message.text}  <DeleteMessage messageID={message.id}/></p>
        </div>
      </div>
    
  );
};

export default Message;