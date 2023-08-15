// import React, { useState } from 'react';
// import './style.css';

// const Announcments = () => {

//     const [announcement, setAnnouncement] = useState('');

//     const handleAnnouncementChange = (event) => {
//         setAnnouncement(event.target.value);
//     };

//     const handleSubmit = () => {
//         console.log('Announcement:', announcement);
//         setAnnouncement('');
//     };
    
//     return ( 
//         <div>
//             <div className='container'>
//                 <div className='header'>
//                     <h3>Create Announcment</h3>
//                 </div>
//                 <div className='body'>
//                     <textarea 
//                     className='post-editor'
//                     value={announcement}
//                     onChange={handleAnnouncementChange}
//                      />
//                     <button className='post-button' onClick={handleSubmit} > Post </button>
//                 </div>
//             </div>
//         </div>
        
//      );
// }
 
// export default Announcments;


import React from "react";
import "./style.css";
import SingleChat from "../../../components/SingleTeacherChat/index";

function TeacherChat() {
  let dummy_data = [
    {
      id: 2,
      course_id: 1,
      name: "charbel",
    },
    {
      id: 2,
      course_id: 2,
      name: "chris",
    },
    {
      id: 2,
      course_id: 3,
      name: "taha",
    },
    {
      id: 2,
      course_id: 3,
      name: "nour",
    },
    {
      id: 2,
      course_id: 4,
      name: "khaled",
    },
  ];
  return (
    <div className="list-container">
      <div className="list-wrapper">
        {dummy_data.map((item) => {
          return <SingleChat item={item} />;
        })}
      </div>
    </div>
  );
}

export default TeacherChat;