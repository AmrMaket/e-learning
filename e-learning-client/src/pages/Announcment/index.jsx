import React, { useState } from 'react';
import './style.css';

const Announcments = () => {

    const [announcement, setAnnouncement] = useState('');

    const handleAnnouncementChange = (event) => {
        setAnnouncement(event.target.value);
    };

    const handleSubmit = () => {
        console.log('Announcement:', announcement);
        setAnnouncement('');
    };
    
    return ( 
        <div>
            <div className='container'>
                <div className='header'>
                    <h3>Create Announcment</h3>
                </div>
                <div className='body'>
                    <textarea 
                    className='post-editor'
                    value={announcement}
                    onChange={handleAnnouncementChange}
                     />
                    <button className='post-button' onClick={handleSubmit} > Post </button>
                </div>
            </div>
        </div>
        
     );
}
 
export default Announcments;