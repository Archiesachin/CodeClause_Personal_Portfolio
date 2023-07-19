// import { BrowserRouter,Route,Routes } from 'react-router-dom'
import {useState} from 'react'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/ContactUs'

import './App.css'

function App() {

  const[darkMode, setDarkMode] = useState(true)
  function toggleImg(){
    setDarkMode(prevMode => !prevMode)
  }

  return(
    <div>
      <Navbar toggleImg={toggleImg} darkMode={darkMode} />
      <Landing title="home" id="home" darkMode={darkMode} />
      <About  title="about" id="about" darkMode={darkMode} />
      <Portfolio title="portfolio" id="portfolio" darkMode={darkMode} />
      <Contact title="contact"  id="contact" darkMode={darkMode} />
    </div>
  )
}

export default App
