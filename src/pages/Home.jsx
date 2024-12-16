import Banner from "../components/Banner.jsx"
import imageAcceuil from "/images/imageAccueil.png"
import Cardlist from "../components/Cardlist.jsx"
import "../styles/home.scss"
import Layout from "../components/Layout.jsx"

function Home() {
  return (
    <Layout>
      <Banner image={imageAcceuil} text="Chez vous, partout et ailleurs" />
      <Cardlist />
    </Layout>
  )
}


export default Home