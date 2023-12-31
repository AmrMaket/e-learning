import React from 'react';
import './styles.css';

function SingleAttendance({ item}) {
  return (
    <div className="single-attendance">
      <div className="course-info">
        <h3 className="h3-tag">{item.course_name}</h3>
        <p className="p-tag">Lecture Time: {item.lecture_time}</p>
      </div>
      <div className="attendance-status">
        <p className="p-tag">Attendance: {item.attendance ? 'Present' : 'Absent'}</p>
      </div>
    </div>
  );
}

export default SingleAttendance;
