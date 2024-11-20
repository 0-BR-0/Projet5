import LogoFooter from '/logofooter.png'
function Footer() {
  return (
    <footer style={{ backgroundColor: "black" }}>
      <img src={LogoFooter} alt='Logo Footer' />
      <h3 style={{ color: "white" }}>© 2020 Kasa. All rights reserved</h3>
    </footer>
  )
}


export default Footer