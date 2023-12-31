
import { Route, BrowserRouter as Router,Routes  } from 'react-router-dom'
import './App.css'
import Homepage from './pages/homepage'
import About from './pages/About/About'
import Navbar from './components/Navbar/Navbar'
function App() {

  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
  )
}

export default App
