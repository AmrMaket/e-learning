import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "./styles.css";

function SingleCard({ item }) {
  const overallRatio = (item.avg_assignment_grade + item.avg_quiz_grade) / 2;
  const circleSize = 60;

  const progressBarStyles = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
  };

  return (
    <div className="card">
      <div className="header">
        <h2>{item.course_name}</h2>
      </div>
      <div className="progress-section">
        <div className="progress-bar" style={progressBarStyles}>
          <CircularProgressbar
            value={overallRatio}
            text={`${Math.round(overallRatio)}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${overallRatio / 100})`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              textSize: "12px",
            })}
          />
          <p>Overall</p>
        </div>
        <div className="progress-bar" style={progressBarStyles}>
          <CircularProgressbar
            value={item.avg_assignment_grade}
            text={`${item.avg_assignment_grade}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${item.avg_assignment_grade / 100})`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              textSize: "12px",
            })}
          />
          <p>Assignments</p>
        </div>
        <div className="progress-bar" style={progressBarStyles}>
          <CircularProgressbar
            value={item.avg_quiz_grade}
            text={`${item.avg_quiz_grade}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${item.avg_quiz_grade / 100})`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              textSize: "12px",
            })}
          />
          <p>Quizzes</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
