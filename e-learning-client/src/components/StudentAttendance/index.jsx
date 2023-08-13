import React, { useState } from "react";
import AttendanceSheetModal from "../AttendanceSheet/index";
import './styles.css';

const students = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  // Add more student objects
];

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <h1>Attendance Management</h1>
      <button onClick={openModal}>Attendance Sheet</button>
      <AttendanceSheetModal
        students={students}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default App;
