import Aside from "../../components/aside/aside"
import AboutMe from "../../components/aboutMe/AboutMe"
import Ex from "../../components/ex/Ex"
import Portfolio from "../../components/portfolio/portfolio"
import Contact from "../../components/contact/Contact"

import { AboutS } from "./styleAbout"


const About = () => {
    return (
        <AboutS>
            <Aside />
            <section className="allSection">
                <div className="margin">
                    <AboutMe/>
                </div>
                <div className="margin">
                    <Portfolio />
                </div>
                <div className="margin">
                    <Ex/>
                </div>
                <div className="margin">
                    <Contact/>
                </div>


            </section>
        </AboutS>
    )
}

export default About