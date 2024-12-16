import Home from './pages/Home.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import About from './pages/About.jsx'
import DetailsCard from './pages/DetailsCard.jsx'
import "./style.scss"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<DetailsCard />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}


export default App
