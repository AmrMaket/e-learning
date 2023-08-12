import '../../base.css'
import './styles.css'

const CoursesList = (props) => {
    const courses = props.courses;
    return (
        <div className="courses-list flex gap-l">
            {courses.map((course) => (
                <div className="course-preview flex flex-col padding-s justify-center align-center gap-s" key={course.id}>
                    <h3>{course.title}</h3>
                    <div>Enrolled status: {course.enrollment}</div>
                    <div>Course capacity: {course.capacity}</div>
                    <button className="enrolled-course-card-button white-text padding-s">
                        Enroll
                    </button>
                </div>
            ))}
        </div>
    );
}
 
export default CoursesList;