import { Link } from 'react-router-dom';
import './styles.css'
import '../../base.css';

const ParentNavbar = () => {

    const userType = "Parent";

    const feature1 = "Progress Monitoring"
    const feature2 = "Communication with Teachers"
    const feature3 = "Attendance and Schedule"
    const feature4 = "Notifications and Reminders"
    const feature5 = "Parent-Teacher Conference Scheduling"
    
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
                <Link className='link-button padding-s white-text' to="/communicationWithTeachers">{feature2}</Link>
                <Link className='link-button padding-s white-text' to="/attendanceAndSchedule">{feature3}</Link>
                <Link className='link-button padding-s white-text' to="/notificationsAndReminders">{feature4}</Link>
                <Link className='link-button padding-s white-text' to="/parentTeacherConference">{feature5}</Link>
            </div>
        </nav>
    );
}
 
export default ParentNavbar;