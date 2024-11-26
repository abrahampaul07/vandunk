import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Stories from './pages/Stories';
import Services from './pages/Services';
import Courses from './pages/Courses';
import Careers from './pages/Careers';
import AcademicEditing from './components/AcademicEditing';
import BookEditing from './components/BookEditing';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import useContactInfo from './hooks/useContactInfo'; // Import the custom hook

function App() {
  // Use the custom hook to get the contact info
  const contactInfo = useContactInfo();

  return (
    <Router>
      <ScrollToTop />
      {/* Pass contactInfo to Navbar and Footer */}
      <Navbar contactInfo={contactInfo} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/success-stories' element={<Stories />} />
        <Route path='/services' element={<Services />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/academic-editing' element={<AcademicEditing />} />
        <Route path='/book-editing' element={<BookEditing />} />
        <Route path='/book-an-appointment' element={<Contact />} />
      </Routes>
      <Footer contactInfo={contactInfo} />
    </Router>
  );
}

export default App;
