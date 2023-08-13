import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleCard from "../../../components/SingleCard";
import axios from "axios";

function ProgressMonitoring() {
  let dummy_data = [
    {
      id: 1,
      studentName: "Hadi",
      courses: [
        {
          id: 1,
          courseName: "UIX",
          teacherName: "Julien",
          assignmentPercentage: 75,
          quizPercentage: 60,
        },
        {
          id: 2,
          courseName: "Soft",
          teacherName: "George",
          assignmentPercentage: 90,
          quizPercentage: 80,
        },
      ],
    },
    {
      id: 1,
      studentName: "M7md",
      courses: [
        {
          id: 1,
          courseName: "UIX",
          teacherName: "Julien",
          assignmentPercentage: 75,
          quizPercentage: 60,
        },
        {
          id: 2,
          courseName: "Soft",
          teacherName: "George",
          assignmentPercentage: 90,
          quizPercentage: 80,
        },
        {
          id: 2,
          courseName: "Soft",
          teacherName: "George",
          assignmentPercentage: 90,
          quizPercentage: 80,
        },
      ],
    },
  ];

  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    axios
      .get("l api hon")
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    //api badde baddel l dummy b data: 1)student name 2)course info
    <div className="progress-monitoring-page">
      <div className="course-cards">
        {dummy_data.map((student) => (
          <div key={student.id} className="student-card">
            <h2>{student.studentName}</h2>
            <div className="course-list">
              {student.courses.map((course) => (
                <SingleCard
                  key={course.id}
                  item={{
                    courseName: course.courseName,
                    teacherName: course.teacherName,
                    studentName: student.studentName,
                    assignmentPercentage: course.assignmentPercentage,
                    quizPercentage: course.quizPercentage,
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressMonitoring;
