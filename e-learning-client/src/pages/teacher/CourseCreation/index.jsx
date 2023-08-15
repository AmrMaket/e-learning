import React from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../../../components/CourseDetail/index';
import './style.css';

const CoursePage = () => {
  const { courseId } = useParams();

  return (
    <div className="CourseContainer">
      < CourseDetail />
      < CourseDetail />
      < CourseDetail />
    </div>
  );
};

export default CoursePage;
