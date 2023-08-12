import { Link } from 'react-router-dom';
import './styles.css'
import '../../base.css';

const TeacherNavbar = () => {

    const userType = "Teacher";

    const feature1 = "Course Creation"
    const feature2 = "Grading And Feedback"
    const feature3 = "Communication"
    const feature4 = "Attendance Tracking"
    const feature5 = "Collaboration Tools"
    
    return (

        <nav className="navbar flex justify-between justify-center align-center padding-s blue-bg">
            <div className="navbar-title white-text flex justify-center align-center padding-s">
                <div className="image-container">
                    <img src={'logo-elearn.png'} alt="logo" />
                </div>
                <h1>{userType}</h1>
            </div>
            
            <div className="links flex scroll">
                <Link className='link-button padding-s white-text' to="/">{feature1}</Link>
                <Link className='link-button padding-s white-text' to="/gradingAndFeedback">{feature2}</Link>
                <Link className='link-button padding-s white-text' to="/communication">{feature3}</Link>
                <Link className='link-button padding-s white-text' to="/attendanceTracking">{feature4}</Link>
                <Link className='link-button padding-s white-text' to="/collaborationTools">{feature5}</Link>
            </div>
        </nav>
    );
}
 
export default TeacherNavbar;