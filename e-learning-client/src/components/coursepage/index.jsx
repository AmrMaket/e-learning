import React from 'react';
import Material from '../Material/index';
import AssignmentPackage from '../AssignmentsPackage/index';
import QuizzForm from '../Quizzes/index';
import LectureForm from '../LecturesOnToggle/index';
import InteractiveContent from '../InteractiveContent/index';
import './style.css';

const CoursePage = () => {
  return (
    <div className='container'>
      <h1>Course Content</h1>
      <Material />
      <AssignmentPackage />
      <QuizzForm />
      <LectureForm />
      <InteractiveContent />
    </div>
  );
};

export default CoursePage;
