import CarouselProducts from "./carousel/CarouselProducts"
import { PortS } from "./stylePortfolio"


const Portfolio = () => {


    return (
        <PortS>
            <div className="title" id="port"><h1 className="NameTitle">PORTFÓLIO</h1></div>
            <div className="portfolio">
                <div className="flexTitle">
                    <h2>Projetos pessoais:</h2>
                    <p>//clique para visitar cada projeto.</p>
                </div>
                <div className="projects" data-aos="fade-left">
                    <CarouselProducts />
                </div>
            </div>
        </PortS>
    )
}

export default Portfolio