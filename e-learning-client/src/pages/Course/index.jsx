import React from 'react';
import { useParams } from 'react-router-dom';
import AssignmentPackage from '../../components/AssignmentsPackage/index';
import QuizForm from '../../components/Quizzes/index';
import LectureForm from '../../components/LecturesOnToggle/index';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div className="course-page">
      <h2>Course Details</h2>
      {/* Render course details */}
      <h3>Assignments</h3>
      <AssignmentPackage courseId={courseId} />
      <h3>Quizzes</h3>
      <QuizForm />
      <h3>Lectures</h3>
      <LectureForm courseId={courseId} />
    </div>
  );
};

export default CoursePage;
