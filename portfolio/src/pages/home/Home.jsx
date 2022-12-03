import { HomeS } from "./styleHome"

import { Link } from "react-router-dom"

import fotoMinha from '/savioF.png'

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
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque iure, atque tempora sit a earum, fugiat autem consequatur optio quaerat porro. Placeat sint quisquam error vitae ad! Dolore, fugiat aut?
                    </p>
                    <div className="bt">
                        <Link to='/about'><button>VER MAIS SOBRE MIM</button></Link>
                    </div>

                </div>
            </div>
            <div className="right">
                <img src={fotoMinha}/>
            </div>
        </HomeS>
    )
}

export default Home