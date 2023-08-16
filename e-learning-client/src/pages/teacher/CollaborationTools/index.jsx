import React, { useState } from 'react';
import './styles.css';

function Collaboration() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState('');
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleAddStudent = (name) => {
    setStudents([...students, name]);
    setNewStudent('');
  };

  const handleCreateProject = () => {
    console.log('Project Created:', {
      title: projectTitle,
      description: projectDescription,
      students: students,
    });
  };

  return (
    <div className="App">
      <h1>Group Project Manager</h1>
      <div className="student_list">
        <h2>Students</h2>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Enter student name"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
        />
        <button className='toggleButton' onClick={() => handleAddStudent(newStudent)}>Add Student</button>
      </div>
      <div className="project_form">
        <h2>Create Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={projectTitle}
          onChange={(e) => setProjectTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
        />
        <button className='toggleButton' onClick={handleCreateProject}>Create Project</button>
      </div>
    </div>
  );
}

export default Collaboration;