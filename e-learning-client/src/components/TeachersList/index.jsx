import '../../base.css'
import './styles.css'

const TeachersList = (props) => {

    const teachers = props.teachers;

    return (
        <div className="teachers-main-container flex flex-col align-center">
            <h2 className='padding-s'>Teachers:</h2>
            <div className="teachers-list flex flex-col">
                {teachers.map((teacher) => (
                    <div className="teacher-preview flex flex-col justify-center align-center" key={teacher.id}>
                        <p>{teacher.name}</p>
                    </div>
                ))}
            </div>
        </div>
        
    );
}
 
export default TeachersList;