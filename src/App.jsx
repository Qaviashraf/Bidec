import React from 'react'
import "./App.css"

// Routers
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
// Pages
import Home from './Pages/Home'
import Services from './Pages/Services'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

// Components
import NavBar from './Components/navBar'
import Footer from './Components/Footer'


function App() {
 
  return (
    <div className='bg-black'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/ContactUs' element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
