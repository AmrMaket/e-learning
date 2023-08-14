import React, { useState } from 'react';
import './style.css';

const AddGrades = ({ students, assignments }) => {
  const [grades, setGrades] = useState({});

  const handleGradeChange = (studentId, assignmentId, grade) => {
  setGrades(prevGrades => ({
    ...prevGrades,
    [studentId]: {
      ...(prevGrades[studentId] || {}),
      [assignmentId]: grade
    }
    }));
  };


  const handleSaveGrades = () => {
    console.log('Grades:', grades); 
  };

  if (!students || !assignments) {
    return null;
  }

  return (
    <div>
      <h2>Add Grades</h2>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            {assignments.map(assignment => (
              <th key={assignment.id}>{assignment.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              {assignments.map(assignment => (
                <td key={assignment.id}>
                  <input
                    type="number"
                    value={grades[student.id]?.[assignment.id] || ''}
                    onChange={e =>
                      handleGradeChange(student.id, assignment.id, e.target.value)
                    }
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSaveGrades}>Save Grades</button>
    </div>
  );
};

export default AddGrades;
