import './App.css';
import Navbar from './components/Navbar';
import ProgressMonitoring from './pages/ProgressMonitoring';
import ParentTeacherConference from './pages/ParentTeacherConference';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<div className="content">
					<Routes>
						<Route path="/" element={<ProgressMonitoring />} />
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
