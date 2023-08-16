import '../../base.css'
import './styles.css'
import { useState } from 'react';
import axios from 'axios';

const CoursesList = (props) => {

    const courses = props.courses;

    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [disabledButtons, setDisabledButtons] = useState([]);

    const enrollCourse = async (courseId) => {
            // setEnrolledCourses([...enrolledCourses, courseId]);
            setDisabledButtons([...disabledButtons, courseId]);
            try{
                const myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + localStorage.getItem('token'));
                const requestOptions = {
                method: 'POST',
                headers: myHeaders,
                redirect: 'follow'
                };
                const postData = {
                    course_id: courseId,
                };
                const result = await axios.post('http://127.0.0.1:8000/api/student_enrollment', postData , requestOptions);
                console.log(result)
            }
            catch(error) {
                console.error('Error:', error);
            };
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
                        disabled={enrolledCourses.includes(course.id) || disabledButtons.includes(course.id)}
                        onClick={() => enrollCourse(course.id)}
                    >
                        {enrolledCourses.includes(course.id) ? 'Enrolled' : 'Enroll'}
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default CoursesList;