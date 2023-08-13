import { useState } from "react";

const ProgressTracking = () => {

    const [courses, setCourses] = useState ([
        {title: 'UI/UX', courseId: 1},
        {title: 'English', courseId: 2},
        {title: 'Biology', courseId: 3},
        {title: 'Database', courseId: 4},
    ]);

    const [tasks, setTasks] = useState ([
        {title: 'Quiz', courseId: 1, id: 1},
        {title: 'Assignment', courseId: 3, id: 2},
    ]);

    const [assignments, setAssignments] = useState ([
        {title: 'Practice Figma', courseId: 1, id: 1},
        {title: 'Write a CV', courseId: 2, id: 2},
    ]);

    const [quizzes, setQuizzes] = useState ([
        {title: 'Analyze COVID Mutations', courseId: 3, id: 1},
        {title: 'Build an E-Commerce Database', courseId: 4, id: 2},
    ]);

    return (
        <div className="progress-tracking-main-container">
            <CourseProgressList courses={courses}/>
        </div>
    );
}
 
export default ProgressTracking;