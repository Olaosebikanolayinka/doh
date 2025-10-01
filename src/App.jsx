import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Utility from './components/Utility'
import Footer from './components/Footer'

import Navbar from './components/Navbar'
import Roadmap from './components/Roadmap'
import Loader from './components/Loader'


function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Utility />
      <Roadmap />
      <Footer />
    </>
  );
}

export default App
