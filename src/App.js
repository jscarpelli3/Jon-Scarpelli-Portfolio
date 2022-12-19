import './index.css'
import NavBar from './components/NavBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <header className="nav">
         <NavBar />
      </header>
      <div className="main">
        <Main />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
