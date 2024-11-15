import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Stories from './pages/Stories'
import Services from './pages/Services'
import Courses from './pages/Courses'
import Careers from './pages/Careers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AcademicEditing from './components/AcademicEditing'
import BookEditing from './components/BookEditing'
import Contact from './components/Contact'

function App() {

  return (
    <Router>
      <Navbar />
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
      <Footer />
    </Router>
  )
}

export default App
