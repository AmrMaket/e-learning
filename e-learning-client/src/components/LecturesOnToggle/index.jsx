import React, { useState } from 'react';
import LectureForm from '../Lectures/index';
import './style.css'

const CreateCoursePage = () => {
  const [isLectureFormVisible, setIsLectureFormVisible] = useState(false);

  const toggleLectureForm = () => {
    setIsLectureFormVisible(!isLectureFormVisible);
  };

  const handleAddLecture = (lecture) => {
    console.log('Adding Lecture:', lecture);
  };

  return (
    <div className="create-course-page">
      <button onClick={toggleLectureForm}>Add Lecture</button>
      {isLectureFormVisible && (
        <LectureForm courseId={123} onAddLecture={handleAddLecture} />
      )}
    </div>
  );
};

export default CreateCoursePage;
