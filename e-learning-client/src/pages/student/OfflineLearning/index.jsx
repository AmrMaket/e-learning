import '../../../base.css';
import CoursesOffline from '../../../components/CoursesOffline';
import './styles.css'


import { useState } from 'react';

const OfflineLearning = () => {

    const [courses, setCourses] = useState ([
        {title: 'UI/UX', materials: "file", id: 1},
        {title: 'English', materials: "file", id: 2},
        {title: 'Biology', materials: "file", id: 3},
        {title: 'Database', materials: ["file"," pdf"], id: 4},
    ]);

    return (
        <div className="offline-learning-main-container">
            <CoursesOffline courses={courses}/>
        </div>
    );
}
 
export default OfflineLearning;