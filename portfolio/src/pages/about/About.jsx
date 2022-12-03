import Aside from "../../components/aside/aside"
import AboutMe from "../../components/aboutMe/AboutMe"
import { AboutS } from "./styleAbout"
import Ex from "../../components/ex/Ex"

const About = () => {
    return (
        <AboutS>
            <Aside />
            <section className="allSection">
                <div className="title"><h1 className="NameTitle">SOBRE MIM</h1>
                </div>
                <div className="margin">
                    <AboutMe />
                </div>
                <div className="title"><h1 className="NameTitle">EXPERIÊNCIAS</h1>
                </div>
                <div className="margin">
                    <Ex/>
                </div>


            </section>
        </AboutS>
    )
}

export default About