import { HomeS } from "./styleHome"

import { Link } from "react-router-dom"

const Home = () => {
    return (
        <HomeS>
            <div className="left">
                <div className="write">
                    <div className="title">
                        <h1>OLÁ!</h1>
                        <h2>EU SOU <span>SÁVIO FREIRE</span></h2>
                        <h3>DESENVOLVEDOR FRONT-END</h3>
                    </div>
                    <p>
                        Bem-vindo ao meu WebSite, espero que goste!
                    </p>
                    <div className="bt">
                        <Link to='/about'><button>VER MAIS SOBRE MIM</button></Link>
                    </div>
                </div>
            </div>
        </HomeS>
    )
}

export default Home