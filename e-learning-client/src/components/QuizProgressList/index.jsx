import '../../base.css'
import './styles.css'

const QuizProgressList = (props) => {
    const quizzes = props.quizzes;
    return (
        <div className="quiz-main-container flex align-center">
            <h2 className='border-right padding-s width-15'>Quizzes</h2>
            <div className="quizzes-list flex gap-l padding-s wrap">
                {quizzes.map((quiz) => (
                    <div className="quiz-preview flex flex-col padding-s justify-center align-center gap-s card-border" key={quiz.id}>
                        <h3>{quiz.title}</h3>
                        <div>Course Title: {quiz.courseTitle}</div>
                        <div>Grade: {quiz.grade}</div>
                        <div>Due: {quiz.deadline}</div>
                    </div>
                ))}
            </div>
        </div>
        
    );
}

export default QuizProgressList;