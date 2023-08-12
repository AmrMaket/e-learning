import React, { useState } from "react";
import "./styles.css";
import MessageModal from "../MessageModal";

function SingleChat({ item }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  //hadi: i want to send the message later
  const [message, setMessage] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendMessage = (message) => {
    console.log("Sent message:", message);
  };

  return (
    <div className="person-item">
      <span className="person-name">{item.name}</span>
      <div className="chat-link" onClick={openModal}>
        <span className="chat-icon">&#128231;</span>
      </div>
      {isModalOpen && (
        <MessageModal closeModal={closeModal} sendMessage={sendMessage} />
      )}
    </div>
  );
}

export default SingleChat;
