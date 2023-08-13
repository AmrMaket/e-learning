import '../../../base.css';
// import TeachersList from '../../../components/TeachersList';
import './styles.css'
import { useState } from 'react';

const StudySupport = () => {

    const [selectedTeacher, setSelectedTeacher] = useState(null);

    const [teachers, setTeachers] = useState ([
        {name: 'Teacher 1', id: 1},
        {name: 'Teacher 2', id: 2},
        {name: 'Teacher 3', id: 3},
        {name: 'Teacher 4', id: 4},
        {name: 'Teacher 5', id: 5},
    ]);

    const handleTeacherSelection = (teacher) => {
        setSelectedTeacher(teacher);
    };

    return (
        <div className="study-support-main-container flex justify-center gap-m padding-m">
            <div className="book-meeting-title flex justify-center align-center width-20 padding-m border">
                <h2>Book a meeting with your favourite teacher!</h2>
            </div>
            <div className="book-meeting-container flex flex-col width-20 padding-m card-border align-center">
            <h3 className="padding-s flex justify-center">Teachers:</h3>
                <div className="teachers-list flex flex-col padding-s">
                    {teachers.map((teacher) => (
                        <h5>
                            <label key={teacher.id} className="teacher-radio-label flex justify-center align-center">
                            <input
                                type="radio"
                                name="teacher"
                                value={teacher.id}
                                checked={selectedTeacher === teacher.id}
                                onChange={() => handleTeacherSelection(teacher.id)}
                            />
                            <span>{teacher.name}</span>
                        </label>
                        </h5>
                        
                    ))}
                </div>
                <div className='width-40 padding-s'>
                    <button className={`white-text ${!selectedTeacher ? 'disabled-button' : ''}`} disabled={!selectedTeacher}>
                        <h4>
                            Book a Meeting!    
                        </h4>
                    </button>
                </div>
                
            </div>
        </div>
    );
}
 
export default StudySupport;
