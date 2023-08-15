import React, { useState } from 'react';
import './style.css';

const CourseCreationForm = () => {
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCourseDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Course Details:', courseDetails);
  };

  return (
    <div className="container-course">
      <h2>Create New Course</h2>
      <form onSubmit={handleSubmit}>
        <div className='course'>
          <label >Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={courseDetails.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className= 'course'>
          <label >Description:</label>
          <textarea
            id="description"
            name="description"
            value={courseDetails.description}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type='submit' className='create'>Create Course</button>
      </form>
    </div>
  );
};

export default CourseCreationForm;
