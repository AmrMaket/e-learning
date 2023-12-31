import React, { useState } from 'react';
import './style.css';
import Popups from '../Popups/index';
import CourseCard from '../CourseCard';

const CreateCoursePage = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCircleClick = () => {
    setIsPopupOpen(!isPopupOpen);
    const circleIcon = document.querySelector('.circle-icon');
    circleIcon.classList.toggle('open');
  };

  return (
    <div className="create-course-page">
      <div>{ <CourseCard />}</div>
      <div className={`circle ${isPopupOpen ? 'active' : ''}`} onClick={handleCircleClick}>
        <div className='circle'>
          <span className={`circle-icon ${isPopupOpen ? 'open' : ''}`}>&#8853;</span>
        </div>
      </div>
      {isPopupOpen && <Popups />}
      
    </div>
    
  );
};

export default CreateCoursePage;
