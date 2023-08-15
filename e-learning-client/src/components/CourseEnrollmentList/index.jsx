import '../../base.css'
import './styles.css'
import { useState } from 'react';

const CoursesList = (props) => {

    const courses = props.courses;

    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const enrollCourse = (courseId) => {
            setEnrolledCourses([...enrolledCourses, courseId]);
    };

    return (
        <div className="courses-list flex gap-l">
            {courses.map((course) => (
                <div className="course-preview flex flex-col padding-s justify-center align-center gap-s" key={course.id}>
                    <h3>{course.title}</h3>
                    <div>Enrolled status: {course.enrollment}</div>
                    <div>Course capacity: {course.capacity}</div>
                    <button 
                    className={`enrolled-course-card-button white-text padding-s ${enrolledCourses.includes(course.id) ? 'disabled-button' : ''}`}
                    disabled={enrolledCourses.includes(course.id)}
                    onClick={() => enrollCourse(course.id)}>
                        {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll'}
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default CoursesList;