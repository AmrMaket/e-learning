import { Link } from 'react-router-dom';
import './styles.css'

const ParentNavbar = () => {

    const userType = "Parent";

    const feature1 = "Progress Monitoring"
    const feature2 = "Communication with Teachers"
    const feature3 = "Attendance and Schedule"
    const feature4 = "Notifications and Reminders"
    const feature5 = "Parent-Teacher Conference Scheduling"
    
    return (

        <nav className="parent-navbar">
            <h1>{userType}</h1>
            <div className="links">
                <Link to="/">{feature1}</Link>
                <Link to="/communicationWithTeachers">{feature2}</Link>
                <Link to="/attendanceAndSchedule">{feature3}</Link>
                <Link to="/notificationsAndReminders">{feature4}</Link>
                <Link to="/parentTeacherConference">{feature5}</Link>
            </div>
        </nav>
    );
}
 
export default ParentNavbar;