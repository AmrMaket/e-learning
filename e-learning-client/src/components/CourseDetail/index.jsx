import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../CourseDetail/style.css';

const CourseDetail = () => {
  const [courseTitle] = useState('UI/UX');

  return (
    <div>
      <div className='containerAll'>
        <h1 className="h1-title">{courseTitle}</h1>
        <Link className="openCourse" to="/course">Open Course</Link>
      </div>
    </div>
  );
};

export default CourseDetail;

