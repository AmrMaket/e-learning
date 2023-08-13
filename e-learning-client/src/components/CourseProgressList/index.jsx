import '../../base.css'
import './styles.css'

const CourseProgressList = (props) => {

    const courses = props.courses;

    return (
        <div className="course-main-container flex  align-center">
            <h2 className='border-right padding-s'>Courses</h2>
            <div className="course-progress-list flex gap-l">
            {courses.map((course) => (
                <div className="course-progress-preview flex flex-col padding-s justify-center align-center gap-s" key={course.id}>
                    <h3>{course.title}</h3>
                    <div>Course Progress: {course.courseProgress}</div>
                </div>
            ))}
            
        </div>
        </div>
        
    );
}
 
export default CourseProgressList;