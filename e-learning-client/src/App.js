import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CourseCreation from '../src/pages/CourseCreation/index';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseCreation />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
