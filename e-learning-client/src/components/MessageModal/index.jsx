import React, { useState } from "react";
import "./styles.css";

function MessageModal({ closeModal }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendClick = async () => {
    if (message.trim() !== "") {
      try {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: JSON.stringify({ message }),
          redirect: "follow",
        };

        const response = await fetch("http://your-backend-api-url/send-message", requestOptions);
        const result = await response.json();

        if (result.status === "success") {
          closeModal();
        } else {
          console.log("Message sending failed.");
        }
      } catch (error) {
        console.error("Error sending message:", error);
      }
    } else {
      console.log("Please enter a message before sending.");
    }
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
