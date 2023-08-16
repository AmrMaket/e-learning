import React, { useState } from 'react';
import axios from 'axios';
import './lectures.css';

const LectureForm = ({ courseId, onAddLecture }) => {
  const [google_link, setGoogleLink] = useState('');
  const [lectureDate, setLectureDate] = useState('');

  const handleTitleChange = (event) => {
    setGoogleLink(event.target.value);
  };

  const handleDateChange = (event) => {
    setLectureDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newLecture = {
      google_link: google_link,
      date: lectureDate,
      courseId: courseId 
    };

    axios.post('http://127.0.0.1:8000/api/add-or-update-lectures', newLecture)
      .then((response) => {
        console.log('Lecture added:', response.data);
        onAddLecture(newLecture);
        setGoogleLink('');
        setLectureDate('');
      })
      .catch((error) => {
        console.error('Error adding lecture:', error);
      });
  };

  return (
    <>
      <div className='containlecture'>
        <h3>Add Lecture</h3>
        <form onSubmit={handleSubmit}>
          <div className='lecture'>
            <label >Google Link:</label>
            <input
              type="text"
              id="lectureTitle"
              value={google_link}
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
          <button type="submit" className='post'>Post</button>
        </form>
      </div>
    </>
  );
};

export default LectureForm;
