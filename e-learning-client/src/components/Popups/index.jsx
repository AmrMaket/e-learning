import React from 'react';
import './style.css';
const Popups = ({ onClose }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Course created successfully!');
    onClose(); 
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h4>Create New Course</h4>
        <h4>Quizzes</h4>
        <h4>Assignments</h4>
        <h4>Interactive Content</h4>
      </div>
    </div>
  );
};

export default Popups;
