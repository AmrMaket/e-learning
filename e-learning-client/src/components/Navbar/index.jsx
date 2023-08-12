import './styles.css'

const Navbar = () => {

    const userType = "Parent";

    const feature1 = "Progress Monitoring"
    const feature2 = "Communication with Teachers"
    const feature3 = "Attendance and Schedule"
    const feature4 = "Notifications and Reminders"
    const feature5 = "Parent-Teacher Conference Scheduling"
    
    return (

        <nav className="navbar">
            <h1>{userType}</h1>
            <div className="links">
                <a href="/">{feature1}</a>
                <a href="/communicationWithTeachers">{feature2}</a>
                <a href="/attendanceAndSchedule">{feature3}</a>
                <a href="/notificationsAndReminders">{feature4}</a>
                <a href="/parentTeacherConference">{feature5}</a>
            </div>
        </nav>
    );
}
 
export default Navbar;