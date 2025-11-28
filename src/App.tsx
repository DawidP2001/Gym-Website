import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/Pages/HomePage'
import PricingPage from './components/Pages/PricingPage';
import React from 'react';
import Facilities from './components/Pages/Facilities';

function App() {
  const [page, setPage] = React.useState('home');

  return (
    <>
      <Navbar setPage={setPage}/>
      {page === 'home' && <HomePage />}
      {page === 'pricing' && <PricingPage />}
      {page === 'facilities' && <Facilities />}
      <Footer year={2024} />
    </>
  )
}

export default App
