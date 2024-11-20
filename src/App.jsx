import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import About from './pages/About.jsx'


function App() {
  return (
    <Router>
      <div id='bodyId'>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}


export default App