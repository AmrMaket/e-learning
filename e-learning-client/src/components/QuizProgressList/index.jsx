import '../../base.css'
import './styles.css'

const QuizProgressList = (props) => {
    const quizzes = props.quizzes;
    return (
        <div className="courses-list flex gap-l">
            {quizzes.map((quiz) => (
                <div className="quiz-preview flex flex-col padding-s justify-center align-center gap-s" key={quiz.id}>
                    <h3>{quiz.title}</h3>
                    <div>Course Title: {quiz.courseTitle}</div>
                    <div>Grade: {quiz.grade}</div>
                    <div>Due: {quiz.deadline}</div>
                </div>
            ))}
        </div>
    );
}

export default QuizProgressList;