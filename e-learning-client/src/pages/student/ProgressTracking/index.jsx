import { useState } from "react";
import CourseProgressList from "../../../components/CourseProgressList";

const ProgressTracking = () => {

    const [courses, setCourses] = useState ([
        {title: 'UI/UX',courseProgress: 80, id: 1},
        {title: 'English',courseProgress: 70, id: 2},
        {title: 'Biology',courseProgress: 90, id: 3},
        {title: 'Database',courseProgress: 50, id: 4},
    ]);

    const [tasks, setTasks] = useState ([
        {title: 'Quiz', courseTitle: 1, grade: 70, id: 1},
        {title: 'Assignment', courseTitle: 3, grade: 30, id: 2},
    ]);

    const [assignments, setAssignments] = useState ([
        {title: 'Practice Figma', courseTitle: 1, grade: 25, id: 1},
        {title: 'Write a CV', courseTitle: 2, grade: 24, id: 2},
    ]);

    const [quizzes, setQuizzes] = useState ([
        {title: 'Analyze COVID Mutations', courseTitle: 3, grade: 68, id: 1},
        {title: 'Build an E-Commerce Database', courseTitle: 4, grade: 55, id: 2},
    ]);

    return (
        <div className="progress-tracking-main-container">
            <CourseProgressList courses={courses}/>
            <TaskProgressList tasks={tasks}/>
            <AssignmentProgressList assignments={assignments}/>
            <QuizProgressList quizzes={quizzes}/>
        </div>
    );
}
 
export default ProgressTracking;