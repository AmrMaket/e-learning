import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ courseId, courseTitle }) => {
  return (
    <div className="course-card">
      <h3>{courseTitle}</h3>
      <Link to={`/courses/${courseId}`} className="enter-button">
        Enter Course
      </Link>
    </div>
  );
};

export default CourseCard;
