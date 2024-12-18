import Banner from "../components/Banner.jsx"
import imageAPropos from "/images/imageAPropos.png"
import Collapse from "../components/Collapse.jsx"
import AboutDatas from "../data/about.json"
import Layout from "../components/Layout.jsx"

function About() {
    return (
        <Layout>
            <Banner image={imageAPropos} text="" />
            <div className="about-collapse">
                {AboutDatas.map((aboutData) => (
                    <Collapse key={aboutData.id} id={aboutData.id} title={aboutData.title} description={aboutData.description} />
                ))}
            </div>
        </Layout>
    )
}

export default About