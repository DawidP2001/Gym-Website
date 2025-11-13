import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HeroSection from './components/sections/HeroSection'

function App() {

  return (
    <>
      <Navbar title="Gym" />
      <HeroSection />
      <Footer year={2024} />
    </>
  )
}

export default App
