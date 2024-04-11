import './App.css'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import NavBar from './Components/NavBar/NavBar'
import Proyectos from './Components/Proyectos/Proyectos'

function App() {


  return (
    <>
      <div className='app'>
        <NavBar />
        <Home />
        <About />
        <Proyectos />
        <Footer />
      </div>
    </>
  )
}

export default App
