import '../../../base.css';
import TeachersList from '../../../components/TeachersList';
import './styles.css'
import { useState } from 'react';

const StudySupport = () => {

    const [teachers, setTeachers] = useState ([
        {name: 'Teacher 1', id: 1},
        {name: 'Teacher 2', id: 2},
        {name: 'Teacher 3', id: 3},
        {name: 'Teacher 4', id: 4},
        {name: 'Teacher 5', id: 5},
    ]);

    return (
        <div className="study-support-main-container flex justify-center">
            <div className="book-meeting-title flex justify-center align-center width-40">
                Book a meeting with your favourite teacher!
            </div>
            <div className="book-meeting-container flex flex-col width-40">
                <TeachersList teachers={teachers}/>
                <button>
                    Book a Meeting!
                </button>
            </div>
        </div>
    );
}
 
export default StudySupport;