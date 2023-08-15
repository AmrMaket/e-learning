import React from 'react';
import './styles.css';

function SingleAttendance({ item}) {
  return (
    <div className="single-attendance">
      <div className="course-info">
        <h3>{item.course_name}</h3>
        <p>Lecture Time: {item.lecture_time}</p>
      </div>
      <div className="attendance-status">
        <p>Attendance: {item.attendance ? 'Present' : 'Absent'}</p>
      </div>
    </div>
  );
}

export default SingleAttendance;
