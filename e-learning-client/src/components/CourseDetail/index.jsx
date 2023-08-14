import React , {useState} from 'react';
import QuizzForm from '../Quizzes/index';
import LectureForm from '../LecturesOnToggle/index';
import Material from '../Material/index';
import InteractiveContent from '../InteractiveContent/index';
import AssignmentPackage from '../AssignmentsPackage/index';
import './style.css';

const CourseDetail = ({  }) => {

  const [courseTitle, setCourseTitle] = useState('UI/UX');
  const [showForm, setShowForm] = useState(false);


  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <div className='containerAll'>
      <h1>{courseTitle}</h1>
      <button className="openCourse" onClick={toggleForm}>
        {showForm ? 'Close Course' : 'Open Course'}
      </button>
      {showForm && (
        <>
          <Material />
          <AssignmentPackage />
          <QuizzForm />
          <LectureForm  />
          <InteractiveContent />
          </>
        )}
      </div> 
    </div>
  );
};

export default CourseDetail;