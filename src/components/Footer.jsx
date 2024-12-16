import LogoFooter from '/images/logofooter.png'
import "../styles/footer.scss"

function Footer() {
  return (
    <footer>
      <img src={LogoFooter} alt='Logo Footer' />
      <h3>© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}

export default Footer