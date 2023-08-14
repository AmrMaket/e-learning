import React from 'react';
import { useParams } from 'react-router-dom';
import AssignmentPackage from '../../../components/AssignmentsPackage/index';
import QuizzForm from '../../../components/Quizzes/index';
import LectureForm from '../../../components/LecturesOnToggle/index';
import Material from '../../../components/Material';
import InteractiveContent from '../../../components/InteractiveContent/index';
import CourseDetail from '../../../components/CourseDetail/index';
import './style.css';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div className="CourseContainer">
      < CourseDetail />
      < CourseDetail />
      < CourseDetail />
      < CourseDetail />
    </div>
  );
};

export default CoursePage;
