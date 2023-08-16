import React, { useState } from 'react';
import CourseDetail from './CourseDetail';

const CoursesList = ({ courses }) => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const handleOpenCourse = (course) => {
    setSelectedCourse(course);
  };

  return (
    <div className="courses-list-container">
      <div className="courses-list">
        {courses.map((course) => (
          <div
            className="course-preview"
            key={course.id}
          >
            <h3>{course.title}</h3>
            <button
              className="enrolled-course-card-button"
              onClick={() => handleOpenCourse(course)}
            >
              Open Course
            </button>
          </div>
        ))}
      </div>
      <div className="course-details">
        <CourseDetail selectedCourse={selectedCourse} />
      </div>
    </div>
  );
};

export default CoursesList;
