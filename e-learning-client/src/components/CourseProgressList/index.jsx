const CourseProgressList = (props) => {

    const courses = props.courses;
    const tasks = props.tasks;
    const assignments = props.assignments;
    const quizzes = props.quizzes;

    return (
        <div className="course-progress-list flex gap-l">
            {courses.map((course) => (
                <div className="course-progress-preview flex flex-col padding-s justify-center align-center gap-s">
                    
                </div>
            ))}
            {tasks.map((task) => (
                <div className="task-progress-preview flex flex-col padding-s justify-center align-center gap-s">
                    
                </div>
            ))}
            {assignments.map((assignment) => (
                <div className="assignment-progress-preview flex flex-col padding-s justify-center align-center gap-s">
                    
                </div>
            ))}
            {quizzes.map((quizze) => (
                <div className="quiz-progress-preview flex flex-col padding-s justify-center align-center gap-s">
                    
                </div>
            ))}
        </div>
    );
}
 
export default CourseProgressList;