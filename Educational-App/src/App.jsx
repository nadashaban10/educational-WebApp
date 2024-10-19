import Login from './components/Login';
import Register from './components/Register';
import './index.css'
import Portfolio from './pages/Portfolio';
import LandingPage from './pages/LandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Courses from './pages/CoursesPage';
import CourseDetails from './components/CourseDetails';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Courses" element={<Courses />} />
        <Route path="/Portfolio" element={<Portfolio />} />
        <Route path="/CourseDetails" element={<CourseDetails />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App