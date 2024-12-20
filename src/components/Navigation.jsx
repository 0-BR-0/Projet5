import { NavLink } from "react-router-dom"
// import "../styles/navigation.scss"

function Navigation() {
    return (
        <ul className="navigation">
            <li><NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>Accueil</NavLink></li>
            <li><NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>A Propos</NavLink></li>
        </ul>
    )
}

export default Navigation