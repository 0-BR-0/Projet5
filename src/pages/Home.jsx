import Banner from "../components/Banner"
import imageAcceuil from "../assets/image/imageAccueil.png"
import Cardlist from "../components/Cardlist"

function Home() {
  return (
    <div>
      <Banner
        imageUrl={imageAcceuil}
        text="Chez vous, partout et ailleurs"
      />
      <p>Accueil</p>
      <Cardlist />
    </div>
  )
}


export default Home