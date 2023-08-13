import React, { useState , useEffect } from "react";
import "./style.css";

const AttendanceSheetModal = ({ students, isOpen, onClose }) => {
  const [attendance, setAttendance] = useState([]);
  
  useEffect(() => {
    if (students) {
      setAttendance(
        students.map((student) => ({
          id: student.id,
          name: student.name,
          present: false,
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
            <tr className="">
              <th>Student Name</th>
              <th>Present</th>
            </tr>
          </thead>
          <tbody>
            {attendance.map((student) => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>
                  <input
                    type="checkbox"
                    checked={student.present}
                    onChange={() => handleCheckboxChange(student.id)}
                  />
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

export default AttendanceSheetModal;
