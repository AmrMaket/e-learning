import '../../base.css'
import './styles.css'

const CoursesOffline = (props) => {

    const courses = props.courses;

    return (
        <div className="course-offline-main-container flex flex-col align-center">
            <h2 className='padding-s'>Courses</h2>
            <div className="course-offline-list flex gap-l padding-s">
            {courses.map((course) => (
                <div className="course-offline-preview flex flex-col padding-s justify-center align-center gap-s card-border" key={course.id}>
                    <h3>{course.title}</h3>
                    <div>Course Materials: {course.materials}</div>
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default CoursesOffline;