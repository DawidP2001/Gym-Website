import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './components/Pages/HomePage'

function App() {

  return (
    <>
      <Navbar title="Gym" />
      <HomePage />
      <Footer year={2024} />
    </>
  )
}

export default App
