import React, { useState } from "react";
import "./styles.css";

function MessageModal({ closeModal, sendMessage }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = () => {
    sendMessage(message);
    closeModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <input
          type="text"
          placeholder="Enter your message"
          value={message}
          onChange={handleInputChange}
        />
        <button className="send-button" onClick={handleSendClick}>
          Send Message
        </button>
        <button className="modal-close-button" onClick={closeModal}>
          Close
        </button>
      </div>
    </div>
  );
}

export default MessageModal;
