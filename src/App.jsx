import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Utility from './components/Utility'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'

function App() {

  return (
    <> 
    <Navbar />
    <Hero />
    <About />
    <Utility />
    <Roadmap />
    <Footer />
    </>
  )
}

export default App
