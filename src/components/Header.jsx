import Logo from '/logo.png'
import Navigation from "./Navigation"

function Header() {
  return (
    <header>
      <div id="logoId">
        <img src={Logo} alt="Logo" />
      </div>
      <Navigation>
      </Navigation>
    </header>
  )
}


export default Header