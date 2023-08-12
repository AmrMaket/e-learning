import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ButtonAdd from './components/ButtonAdd';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ButtonAdd />} />
          {/* <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/singleView" element={<SingleView />} /> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
