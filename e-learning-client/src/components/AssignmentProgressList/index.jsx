import '../../base.css'
import './styles.css'

const AssignmentProgressList = (props) => {
    const assignments = props.assignments;
    return (
        <div className="assignment-list flex gap-l">
            {assignments.map((assignment) => (
                <div className="assignment-preview flex flex-col padding-s justify-center align-center gap-s" key={assignment.id}>
                    <h3>{assignment.title}</h3>
                    <div>Course Title: {assignment.courseTitle}</div>
                    <div>Grade: {assignment.grade}</div>
                    <div>Due: {assignment.deadline}</div>
                </div>
            ))}
        </div>
    );
}

export default AssignmentProgressList;