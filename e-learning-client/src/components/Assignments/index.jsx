import React, { useState } from 'react';
import './style.css';

const AssignmentForm = ({ courseId, onAddAssignment }) => {
  const [assignmentTitle, setAssignmentTitle] = useState('');
  const [assignmentRequirements, setAssignmentRequirements] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleTitleChange = (event) => {
    setAssignmentTitle(event.target.value);
  };

  const handleRequirementsChange = (event) => {
    setAssignmentRequirements(event.target.value);
  };

  const handleDueDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newAssignment = {
      title: assignmentTitle,
      requirements: assignmentRequirements,
      dueDate: dueDate,
      courseId: courseId,
    };

    onAddAssignment(newAssignment);

    setAssignmentTitle('');
    setAssignmentRequirements('');
    setDueDate('');
  };

  return (
    <>
      <div className="assignment">
        <h3>Create New Assignment</h3>
        <form onSubmit={handleSubmit}>
          <div className="input">
            <label>Title:</label>
            <input
              type="text"
              value={assignmentTitle}
              onChange={handleTitleChange}
              required
            />
          </div>
          <div className="input">
            <label>Requirements:</label>
            <textarea
              value={assignmentRequirements}
              onChange={handleRequirementsChange}
              required
            />
          </div>
          <div className="input">
            <label>Due Date:</label>
            <input
              type="date"
              value={dueDate}
              onChange={handleDueDateChange}
              required
            />
          </div>
        </form>
    </div>
    <button type="submit" className='create'>Create Assignment</button>
    </>

  );
};

export default AssignmentForm;
