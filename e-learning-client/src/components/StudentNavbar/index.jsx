import { Link } from 'react-router-dom';
import './styles.css'
import '../../base.css';

const StudentNavbar = () => {

    const userType = "Student";

    const feature1 = "Course Enrollment"
    const feature2 = "Progress Tracking"
    const feature3 = "Interactive Learning"
    const feature4 = "Study Support"
    const feature5 = "Offline Learning"
    
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
                <Link className='link-button padding-s white-text' to="/progressTracking">{feature2}</Link>
                <Link className='link-button padding-s white-text' to="/interactiveLearning">{feature3}</Link>
                <Link className='link-button padding-s white-text' to="/studySupport">{feature4}</Link>
                <Link className='link-button padding-s white-text' to="/offlineLearning">{feature5}</Link>
            </div>
        </nav>
    );
}
 
export default StudentNavbar;