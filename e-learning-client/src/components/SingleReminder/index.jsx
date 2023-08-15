import React from "react";
import "./styles.css";

function SingleReminder({ item }) {
  return (
    <div className="reminder">
      <div className="info">
        <div className="name">Name: {item.name}</div>
        <div className="due-time">Due Date: {item.dueTime}</div>
      </div>
    </div>
  );
}

export default SingleReminder;
