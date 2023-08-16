import React from "react";
import "./styles.css";

function SingleReminder2({ item }) {
  return (
    <div className="reminder">
      <div className="info">
        <div className="name">Name: {item.assignment_name}</div>
        <div className="due-time">Due Date: {item.due_date}</div>
      </div>
    </div>
  );
}

export default SingleReminder2;