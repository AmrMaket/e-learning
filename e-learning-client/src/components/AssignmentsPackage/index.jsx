import React, { useState } from 'react';
import AssignmentForm from '../Assignments/index';
import '../AssignmentsPackage/style.css';

const AssignmentPackage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddAssignment = (newAssignment) => {
    console.log('New Assignment:', newAssignment);
  };

  const toggleForm = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div>
      <button className='toggleButton' onClick={toggleForm}>
        {isFormVisible ? 'Hide Assignment Form' : 'Show Assignment Form'}
      </button>
      {isFormVisible && (
        <AssignmentForm courseId="yourCourseId" onAddAssignment={handleAddAssignment} />
      )}
    </div>
  );
};

export default AssignmentPackage;
