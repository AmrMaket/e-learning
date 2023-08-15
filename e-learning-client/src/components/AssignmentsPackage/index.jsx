import React, { useState } from 'react';
import AssignmentForm from '../Assignments/index';

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
      <button onClick={toggleForm}>
        {isFormVisible ? 'Hide Assignment Form' : 'Show Assignment Form'}
      </button>
      {isFormVisible && (
        <AssignmentForm courseId="yourCourseId" onAddAssignment={handleAddAssignment} />
      )}
    </div>
  );
};

export default AssignmentPackage;
