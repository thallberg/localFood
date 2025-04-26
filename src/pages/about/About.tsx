import abouthHero from "/about/abouthero.webp"
import HeaderImage from '../../components/header/HeaderImage'
import AbouUs from "../../components/aboutcomponents/AbouUs"
import HowStarted from "../../components/aboutcomponents/HowStarted"

const About = () => {
  return (
    <div>
        <HeaderImage
        image={abouthHero}
        altText='Bild Som representerar Gruppen'
        titel='Titel på Om Oss'
        body='text'/>

        <section>
          <AbouUs/>
        </section>

        <section>
          <HowStarted/>      
        </section>

        <div>

        </div>

        <div></div>

    </div>
  )
}

export default About