import './App.css';
import ParentNavbar from './components/ParentNavbar';
import ProgressMonitoring from './pages/parent/ProgressMonitoring';
import ParentTeacherConference from './pages/parent/ParentTeacherConference';
import CommunicationWithTeachers from './pages/parent/CommunicationWithTeachers';
import AttendanceAndSchedule from './pages/parent/AttendanceAndSchedule';
import NotificationsAndReminders from './pages/parent/NotificationsAndReminders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	const state = 2;
	if (state === 0) {
		//admin
		//return(...admin related)
	}
	if (state === 1) {
		//teacher
		//return(...teacher related)
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
		//return(...teacher related)
	}
}

export default App;
