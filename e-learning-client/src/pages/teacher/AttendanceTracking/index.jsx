import React from 'react';
import Attendance from '../../../components/AttendanceSheet/index';
import './styles.css';

const AttendaceTracking = () => {
    return ( 
        <div className='container'>
            <div>
                { <Attendance/>}
            </div>
            
        </div>
     );
}
 
export default AttendaceTracking;
