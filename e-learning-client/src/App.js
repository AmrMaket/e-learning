import './App.css';
import ParentNavbar from './components/ParentNavbar';
import ProgressMonitoring from './pages/ProgressMonitoring';
import ParentTeacherConference from './pages/ParentTeacherConference';
import CommunicationWithTeachers from './pages/CommunicationWithTeachers';
import AttendanceAndSchedule from './pages/AttendanceAndSchedule';
import NotificationsAndReminders from './pages/NotificationsAndReminders';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
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

export default App;
