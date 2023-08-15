import React, { useState } from 'react';
import './assignment.css';

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
    <h3 className="assignment-title">Create New Assignment</h3>
    <form onSubmit={handleSubmit}>
      <div className="input">
        <label className="input-label">Title:</label>
        <input
          type="text"
          className="input-field"
          value={assignmentTitle}
          onChange={handleTitleChange}
          required
        />
      </div>
      <div className="input">
        <label className="input-label">Requirements:</label>
        <textarea
          className="input-field"
          value={assignmentRequirements}
          onChange={handleRequirementsChange}
          required
        />
      </div>
      <div className="input">
        <label className="input-label">Due Date:</label>
        <input
          type="date"
          className="input-field"
          value={dueDate}
          onChange={handleDueDateChange}
          required
        />
      </div>
      <button type="submit" className="create-button">Create Assignment</button>
    </form>
  </div>
</>

  );
};

export default AssignmentForm;
