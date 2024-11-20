import Banner from "../components/Banner"
import imageAPropos from "../assets/image/imageAPropos.png"

function About() {
    return (
        <div>
            <Banner
                imageUrl={imageAPropos}
                text="Chez vous, partout et ailleurs"
            />
            <p>A Propos</p>
        </div>

    )
}


export default About