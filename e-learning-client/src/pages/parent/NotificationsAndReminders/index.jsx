import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleReminder from "../../../components/SingleReminder";
import SingleReminder2 from "../../../components/SingleReminder2";

function Reminders() {
  const [quizData, setQuizData] = useState([]);
  const fetchQuizzes = async () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_quizzes_notification",
        requestOptions
      );
      const result = await response.json();
      if (result.status === "success") {
        setQuizData(result.results);
        console.log(result);
      } else {
        console.error("API request failed:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const [assignmentData, setAssignmentData] = useState([]);
  const fetchAssignments = async () => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Bearer " + localStorage.getItem("token")
    );
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };
    try {
      const response = await fetch(
        "http://127.0.0.1:8000/api/get_assignments_notification",
        requestOptions
      );
      const result = await response.json();
      if (result.status === "success") {
        setAssignmentData(result.results);
        console.log(result);
      } else {
        console.error("API request failed:", result);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchQuizzes();
    fetchAssignments();
  }, []);

  return (
    <div className="reminder-wrapper">
      <div className="container-reminder">
        <h3 className="title-type">Quizzes</h3>
        <div className="reminders">
          {quizData.map((quiz) => (
            <SingleReminder key={quiz.id} item={quiz} />
          ))}
        </div>
      </div>
      <div className="container-reminder">
        <h3 className="title-type">Assignments</h3>
        <div className="reminders">
          {assignmentData.map((assignment) => (
            <SingleReminder2 key={assignment.id} item={assignment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reminders;
