import './index.css'
import NavBar from './components/NavBar'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <header className="nav">
         <NavBar />
      </header>
      <div className="main">
        <Main />
      </div>
    </div>
  )
}

export default App
