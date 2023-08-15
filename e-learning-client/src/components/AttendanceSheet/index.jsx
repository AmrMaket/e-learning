import React, { useState , useEffect} from "react";
import '../AttendanceSheet/style.css';

const AttendanceSheet = ({ students, isOpen, onClose }) => {
  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    if (students) {
      setAttendance(
        students.map((student) => ({
          id: student.id,
          name: student.name,
          present: false,
          isEditing: false, 
        }))
      );
    }
  }, [students]);

  const handleCheckboxChange = (studentId) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  const handleEditToggle = (studentId) => {
    setAttendance((prevAttendance) =>
      prevAttendance.map((student) =>
        student.id === studentId
          ? { ...student, isEditing: !student.isEditing }
          : student
      )
    );
  };

  const handleSubmit = () => {
    console.log(attendance);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="attendance-modal">
      <div className="modal-content">
        <h2>Attendance Sheet</h2>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Present</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  {student.isEditing ? (
                    <input
                      type="checkbox"
                      checked={student.present}
                      onChange={() => handleCheckboxChange(student.id)}
                    />
                  ) : (
                    student.present ? "Present" : "Absent"
                  )}
                </td>
                <td>
                  <button onClick={() => handleEditToggle(student.id)}>
                    {student.isEditing ? "Save" : "Edit"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleSubmit}>Save</button>
      </div>
    </div>
  );
};

export default AttendanceSheet;
