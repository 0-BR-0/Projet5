import { NavLink } from "react-router-dom"

function Navigation() {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>Accueil</li>
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>A Propos</li>
                </NavLink>
            </ul>
        </div>
    )
}


export default Navigation