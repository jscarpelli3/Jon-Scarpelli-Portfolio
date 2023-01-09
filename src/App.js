import './index.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'
import AboutMe from './components/AboutMe'

function App() {
  return (
    <div className="app">
      <nav>
         <NavBar />
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Main />} />
           <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
