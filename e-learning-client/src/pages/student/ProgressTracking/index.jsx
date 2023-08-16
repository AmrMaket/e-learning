
import CourseProgressList from "../../../components/CourseProgressList";
import TaskProgressList from "../../../components/TaskProgressList";
import AssignmentProgressList from "../../../components/AssignmentProgressList";
import QuizProgressList from "../../../components/QuizProgressList";
import '../../../base.css';
import React, {useState, useEffect} from "react";
import axios from 'axios';


const ProgressTracking = () => {

    const [courses, setCourses] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [assignments, setAssignments] = useState ([]);
    const [quizzes, setQuizzes] = useState ([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetchCourses();
        fetchTasks();
        fetchAssignments();
        fetchQuizzes();
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

    // const [tasks, setTasks] = useState ([
    //     {title: 'Quiz', courseTitle: 1, grade: 70, deadline: 'date/time', id: 1},
    //     {title: 'Assignment', courseTitle: 3, grade: 30, deadline: 'date/time', id: 2},
    // ]);

    // const [tasks, setTasks] = useState ([
    //     {title: 'Quiz', courseTitle: 1, grade: 70, deadline: 'date/time', id: 1},
    //     {title: 'Assignment', courseTitle: 3, grade: 30, deadline: 'date/time', id: 2},
    // ]);

    const fetchTasks = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/get_assignments');

            const transformedArray = response.data.all_assignments.map(data => ({
                title: data.name,
                courseTitle: data.description,
                grade: data.grade_overall,
                deadline: data.due_date,
                id: data.id
              }));

              setTasks(transformedArray);
            setLoading(false);
        }
        catch (error){
            console.error('Error fetching contacts', error);
            setLoading(false);
        }
    };

    // const [assignments, setAssignments] = useState ([
    //     {title: 'Practice Figma', courseTitle: 1, grade: 25, deadline: 'date/time', id: 1},
    //     {title: 'Write a CV', courseTitle: 2, grade: 24, deadline: 'date/time', id: 2},
    // ]);

    const fetchAssignments = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/get_assignments');

            const transformedArray = response.data.corrected_assignments.map(data => ({
                title: data.id,
                courseTitle: data.description,
                grade: data.grade,
                deadline: data.submitted_at,
                id: data.id
              }));

              setAssignments(transformedArray);
            setLoading(false);
        }
        catch (error){
            console.error('Error fetching contacts', error);
            setLoading(false);
        }
    };

    // const [quizzes, setQuizzes] = useState ([
    //     {title: 'Analyze COVID Mutations', courseTitle: 3, grade: 68, deadline: 'date/time', id: 1},
    //     {title: 'Build an E-Commerce Database', courseTitle: 4, grade: 55, deadline: 'date/time', id: 2},
    // ]);

    const fetchQuizzes = async () => {
        try{
            const response = await axios.get('http://127.0.0.1:8000/api/get_quizzes');

            const transformedArray = response.data.all_quizzes.map(data => ({
                title: data.name,
                courseTitle: data.course.name,
                grade: data.grade_overall,
                deadline: data.due_date,
                id: data.id
              }));

              setQuizzes(transformedArray);
            setLoading(false);
        }
        catch (error){
            console.error('Error fetching contacts', error);
            setLoading(false);
        }
    };

    if(loading){
        return <p>Please wait while we gather your courses</p>;
    }

    return (
        <div className="progress-tracking-main-container flex flex-col">
            <CourseProgressList courses={courses}/>
            <TaskProgressList tasks={tasks}/>
            <AssignmentProgressList assignments={assignments}/>
            <QuizProgressList quizzes={quizzes}/>
        </div>
    );
}
 
export default ProgressTracking;