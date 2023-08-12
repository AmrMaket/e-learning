import './App.css';
import ParentNavbar from './components/ParentNavbar';
import ProgressMonitoring from './pages/parent/ProgressMonitoring';
import ParentTeacherConference from './pages/parent/ParentTeacherConference';
import CommunicationWithTeachers from './pages/parent/CommunicationWithTeachers';
import AttendanceAndSchedule from './pages/parent/AttendanceAndSchedule';
import NotificationsAndReminders from './pages/parent/NotificationsAndReminders';
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
