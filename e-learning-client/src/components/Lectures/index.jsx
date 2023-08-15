import React, { useState } from 'react';
import './style.css';

const LectureForm = ({ courseId, onAddLecture }) => {
  const [lectureTitle, setLectureTitle] = useState('');
  const [lectureDate, setLectureDate] = useState('');

  const handleTitleChange = (event) => {
    setLectureTitle(event.target.value);
  };

  const handleDateChange = (event) => {
    setLectureDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLecture = {
      title: lectureTitle,
      date: lectureDate,
      courseId: courseId 
    };

    onAddLecture(newLecture);

    setLectureTitle('');
    setLectureDate('');
  };

  return (
    <>
      <div className='containlecture'>
      <h3>Add Lecture</h3>
      <form onSubmit={handleSubmit}>
        <div className='lecture'>
          <label >Title:</label>
          <input
            type="text"
            id="lectureTitle"
            value={lectureTitle}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className='lecture'>
          <label >Date:</label>
          <input
            type="date"
            id="lectureDate"
            value={lectureDate}
            onChange={handleDateChange}
            required
          />
        </div>
      </form>
    </div>
    <button type="submit" className='post'>Post</button>
    </>

  );
};

export default LectureForm;
