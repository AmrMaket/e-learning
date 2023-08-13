import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

function SingleCard({ item }) {
  const overallRatio = (item.assignmentPercentage + item.quizPercentage) / 2;
  const circleSize = 60;

  const progressBarStyles = {
    width: `${circleSize}px`,
    height: `${circleSize}px`,
  };

  return (
    <div className="card">
      <div className="header">
        <h2>{item.courseName}</h2>
        <p>{item.teacherName}</p>
        <p>{item.studentName}</p>
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
              textSize: '12px',
            })}
          />
          <p>Overall</p>
        </div>
        <div className="progress-bar" style={progressBarStyles}>
          <CircularProgressbar
            value={item.assignmentPercentage}
            text={`${item.assignmentPercentage}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${item.assignmentPercentage / 100})`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              textSize: '12px',
            })}
          />
          <p>Assignments</p>
        </div>
        <div className="progress-bar" style={progressBarStyles}>
          <CircularProgressbar
            value={item.quizPercentage}
            text={`${item.quizPercentage}%`}
            styles={buildStyles({
              pathColor: `rgba(62, 152, 199, ${item.quizPercentage / 100})`,
              width: `${circleSize}px`,
              height: `${circleSize}px`,
              textSize: '12px',
            })}
          />
          <p>Quizzes</p>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;
