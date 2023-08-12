import CourseEnrollmentList from "../../../components/CourseEnrollmentList";
import { useState } from 'react';
import '../../../base.css'
import './styles.css'

const CourseEnrollment = () => {

    const [courses, setCourses] = useState ([
        {title: 'UI/UX', enrollment: 'Enrolled', capacity: '30', id: 1},
        {title: 'English', enrollment: 'Enrolled', capacity: '25', id: 2},
        {title: 'Biology', enrollment: 'Not Enrolled', capacity: '20', id: 3},
        {title: 'Database', enrollment: 'Enrolled', capacity: '10', id: 4},
    ]);

    return (
        <div className="course-enrollment-main-container flex padding-l">
            <CourseEnrollmentList courses={courses}/>
        </div>
    );
}
 
export default CourseEnrollment;