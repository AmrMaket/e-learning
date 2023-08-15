import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LectureForm from '../Lectures/index';
import './style.css';

const CreateCoursePage = () => {
  const [isLectureFormVisible, setIsLectureFormVisible] = useState(false);
  const [lectures, setLectures] = useState([]);

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    try {
      const response = await axios.get('URL_TO_YOUR_API_ENDPOINT');
      setLectures(response.data);
    } catch (error) {
      console.error('Error fetching lectures:', error);
    }
  };

  const toggleLectureForm = () => {
    setIsLectureFormVisible(!isLectureFormVisible);
  };

  const handleAddLecture = (lecture) => {
    console.log('Adding Lecture:', lecture);
  };

  return (
    <div className="create-course-page">
      <button onClick={toggleLectureForm}>Add Lecture</button>
      {isLectureFormVisible && (
        <LectureForm courseId={123} onAddLecture={handleAddLecture} />
      )}

      <h2>Lectures</h2>
      <ul>
        {lectures.map((lecture) => (
          <li key={lecture.id}>{lecture.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default CreateCoursePage;
