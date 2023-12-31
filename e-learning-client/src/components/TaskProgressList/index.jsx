import '../../base.css'
import './styles.css'

const TaskProgressList = (props) => {
    const tasks = props.tasks;
    return (
        <div className="task-main-container flex align-center">
            <h2 className='border-right padding-s width-15'>Tasks</h2>
            <div className="tasks-list flex gap-l padding-s wrap">
                {tasks.map((task) => (
                    <div className="task-preview flex flex-col padding-s justify-center align-center gap-s card-border" key={task.id}>
                        <h3>{task.title}</h3>
                        <div>Course Title: {task.courseTitle}</div>
                        <div>Grade: {task.grade}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TaskProgressList;