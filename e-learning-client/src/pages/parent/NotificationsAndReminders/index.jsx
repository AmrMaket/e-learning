import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleReminder from "../../../components/SingleReminder";
import axios from "axios";

function Reminders() {
  let quiz_dummy = [
    {
      id: 1,
      type: "Quiz",
      name: "Quiz number 1",
      dueTime: "20-2-2023/10:00",
    },
    {
      id: 2,
      type: "Quiz",
      name: "Quiz number 2ssssssssssss",
      dueTime: "20-3-2023/10:00",
    },
    {
      id: 3,
      type: "Quiz",
      name: "Quiz number 3",
      dueTime: "20-4-2023/10:00",
    },
  ];
  let assignment_dummy = [
    {
      id: 1,
      type: "Assignment",
      name: "Assignment number 1",
      dueTime: "20-2-2023/10:00",
    },
    {
      id: 2,
      type: "Assignment",
      name: "Assignment number 2ssssssssssss",
      dueTime: "20-3-2023/10:00",
    },
    {
      id: 3,
      type: "Assignment",
      name: "Assignment number 3",
      dueTime: "20-4-2023/10:00",
    },
  ];
  const [quizData, setQuizData] = useState([]);
  const [assignmentData, setAssignmentData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const responseQuiz = await axios.get("the quiz api");
        const responseAssignment = await axios.get("the assignment api");
        setQuizData(responseQuiz.data);
        setAssignmentData(responseAssignment.data);
      } catch (error) {
        console.error("Error fetching:", error);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="reminder-wrapper">
      <div className="container-reminder">
        <h3 className="title-type">Quizzes</h3>
        <div className="reminders">
          {/* add the states */}
          {quiz_dummy.map((item) => (
            <SingleReminder key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="container-reminder">
        <h3 className="title-type">Assignments</h3>
        <div className="reminders">
          {/* add the states */}
          {assignment_dummy.map((item) => (
            <SingleReminder key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reminders;
