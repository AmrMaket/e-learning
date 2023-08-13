import React from 'react';
import { useParams } from 'react-router-dom';
import AssignmentPackage from '../../../components/AssignmentsPackage/index';
import QuizzForm from '../../../components/Quizzes/index';
import LectureForm from '../../../components/LecturesOnToggle/index';
import './style.css';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div className="container">
      <h2>Course Details</h2>
      <AssignmentPackage courseId={courseId} />
      <QuizzForm />
      <LectureForm courseId={courseId} />
    </div>
  );
};

export default CoursePage;
