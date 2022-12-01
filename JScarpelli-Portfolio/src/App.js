import './index.css'
import NavBar from './components/NavBar'
import Main from './components/Main'

function App() {
  return (
    <div className="app">
      <div className="nav-div">
         <NavBar />
      </div>
      <div className="main-div">
        <Main />
      </div>
    </div>
  )
}

export default App
