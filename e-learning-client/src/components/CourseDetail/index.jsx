import React, { useState } from 'react';
import './style.css';
import Material from '../Material/index';
import AssignmentPackage from '../AssignmentsPackage/index';
import QuizzForm from '../Quizzes/index';
import LectureForm from '../LecturesOnToggle/index';
import InteractiveContent from '../InteractiveContent/index';

const CourseDetail = () => {
  const [courseTitle, setCourseTitle] = useState('UI/UX');
  const [showComponents, setShowComponents] = useState(false);

  const toggleShowComponents = () => {
    setShowComponents(!showComponents);
  };

  return (
    <div>
      <div className='containerAll'>
        <h1 className=".course-tit">{courseTitle}</h1>
        <button className="openCourse" onClick={toggleShowComponents}>
          {showComponents ? 'Close Course' : 'Open Course'}
        </button>
        {showComponents && (
          <>
            <Material />
            <AssignmentPackage />
            <QuizzForm />
            <LectureForm />
            <InteractiveContent />
          </>
        )}
      </div>
    </div>
  );
};

export default CourseDetail;
