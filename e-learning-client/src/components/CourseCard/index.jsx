import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const CourseCard = ({ courseId, courseTitle }) => {
  return (
    <div className="container">
      <h3>{courseTitle}</h3>
      <Link to={`/courses/${courseId}`} className="enter-button">
        Enter Course
      </Link>
    </div>
  );
};

export default CourseCard;
