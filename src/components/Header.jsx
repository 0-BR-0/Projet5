import Logo from '/images/logo.png'
import Navigation from "./Navigation"
// import "../styles/header.scss"
import { Link } from "react-router-dom"


function Header() {
  return (
    <header>
      <Link to="/" className="header-logo">
        <img src={Logo} alt="Logo" />
      </Link>
      <Navigation />
    </header>
  )
}

export default Header