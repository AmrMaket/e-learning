import CourseEnrollmentList from "../../../components/CourseEnrollmentList";
import React, {useState, useEffect} from "react";
import axios from 'axios';
import '../../../base.css'
import './styles.css'

const CourseEnrollment = () => {

    // const [courses, setCourses] = useState ([
    //     {title: 'UI/UX', enrollment: 'Enrolled', capacity: '30', id: 1},
    //     {title: 'English', enrollment: 'Enrolled', capacity: '25', id: 2},
    //     {title: 'Biology', enrollment: 'Not Enrolled', capacity: '20', id: 3},
    //     {title: 'Database', enrollment: 'Enrolled', capacity: '10', id: 4},
    // ]);

    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/courses_available');

            const transformedArray = response.data.courses.map(data => ({
                title: data.name,
                enrollment: (data.capacity - data.remaining_capacity) > 0 ? 'Enrolled' : 'Not Enrolled',
                capacity: data.capacity.toString(),
                id: data.course_id
              }));

            setCourses(transformedArray);
            setLoading(false);
        }
        catch (error){
            console.error('Error fetching contacts', error);
            setLoading(false);
        }
    };

    if(loading){
        return <p>Please wait while we gather your contacts</p>;
    }

    return (
        <div className="course-enrollment-main-container flex flex-col padding-l">
            <div className="course-enrollment-title">
                <h2>
                    Courses:
                </h2>
            </div>
            <div className="course-enrollment-courses">
                <CourseEnrollmentList courses={courses}/>
            </div>
            
        </div>
    );
}
 
export default CourseEnrollment;