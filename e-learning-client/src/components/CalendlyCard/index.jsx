import React from 'react';
import './styles.css';
import { PopupButton } from "react-calendly";

function CalendlyCard({ teacher }) {
  return (
    <div className="teacher-card">
      <div className="teacher-info">
        <div className="teacher-name">{teacher.teacher_name}</div>
        <PopupButton
          url={teacher.calendly}
          rootElement={document.getElementById("root")}
          text="Book a meeting!"
          className="popup-button"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "8px 15px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
        />
      </div>
    </div>
  );
}

export default CalendlyCard;
