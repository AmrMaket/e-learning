import React, { useState, useEffect } from "react";
import "./styles.css";
import SingleCard from "../../../components/SingleCard";

function ProgressMonitoring() {
  
  const [studentData, setStudentData] = useState([]);

  const fetchInfo = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/child_progress", requestOptions);
      const result = await response.json();
      if (result.status === 'success') {
        setStudentData(result.results);
        console.log(result)
      } else {
        console.error('API request failed:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="progress-monitoring-page">
      <div className="course-cards">
        {studentData.map((course) => (
          <div key={course.course_name} className="student-card">
            <h2>{course.course_name}</h2>
            <div className="course-list">
              <SingleCard
                key={course.course_name}
                item={{
                  courseName: course.course_name,
                  avg_assignment_grade: course.avg_assignment_grade,
                  avg_quiz_grade: course.avg_quiz_grade,
                  quiz_grade_overall: course.quiz_grade_overall,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProgressMonitoring;
