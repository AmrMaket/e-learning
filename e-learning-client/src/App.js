import './App.css';

//Teacher-related imports
import TeacherNavbar from './components/TeacherNavbar';
import AttendanceTracking from './pages/teacher/AttendanceTracking/index';
import CollaborationTools from './pages/teacher/CollaborationTools/index';
import Communication from './pages/teacher/Communication/index';
import CourseCreation from './pages/teacher/Course/index';
import GradingAndFeedback from './pages/teacher/GradingAndFeedback/index';

//Parent-related imports
import ParentNavbar from './components/ParentNavbar';
import ProgressMonitoring from './pages/parent/ProgressMonitoring';
import ParentTeacherConference from './pages/parent/ParentTeacherConference';
import CommunicationWithTeachers from './pages/parent/CommunicationWithTeachers';
import AttendanceAndSchedule from './pages/parent/AttendanceAndSchedule';
import NotificationsAndReminders from './pages/parent/NotificationsAndReminders';

//Student-related imports
import StudentNavbar from './components/StudentNavbar';
import CourseEnrollment from './pages/student/CourseEnrollment';
import InteractiveLearning from './pages/student/InteractiveLearning';
import OfflineLearning from './pages/student/OfflineLearning';
import ProgressTracking from './pages/student/ProgressTracking';
import StudySupport from './pages/student/StudySupport';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const state = 1;
	if (state === 0) {
		//admin
		//return(...admin related)
	}
	if (state === 1) {
		//teacher
		return (
			<Router>
				<div className="App">
					<TeacherNavbar />
					<div className="content">
						<Routes>
							<Route path="/" element={<CourseCreation />} />

							<Route
								path="/gradingAndFeedback"
								element={<GradingAndFeedback />}
							/>
							<Route path="/communication" element={<Communication />} />
							<Route
								path="/attendanceTracking"
								element={<AttendanceTracking />}
							/>
							<Route
								path="/collaborationTools"
								element={<CollaborationTools />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
	if (state === 2) {
		//parent
		return (
			<Router>
				<div className="App">
					<ParentNavbar />
					<div className="content">
						<Routes>
							<Route path="/" element={<ProgressMonitoring />} />

							<Route
								path="/communicationWithTeachers"
								element={<CommunicationWithTeachers />}
							/>
							<Route
								path="/attendanceAndSchedule"
								element={<AttendanceAndSchedule />}
							/>
							<Route
								path="/notificationsAndReminders"
								element={<NotificationsAndReminders />}
							/>
							<Route
								path="/parentTeacherConference"
								element={<ParentTeacherConference />}
							/>
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
	if (state === 3) {
		//student
		return (
			<Router>
				<div className="App">
					<StudentNavbar />
					<div className="content">
						<Routes>
							<Route path="/" element={<CourseEnrollment />} />

							<Route path="/progressTracking" element={<ProgressTracking />} />
							<Route
								path="/interactiveLearning"
								element={<InteractiveLearning />}
							/>
							<Route path="/studySupport" element={<StudySupport />} />
							<Route path="/offlineLearning" element={<OfflineLearning />} />
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;