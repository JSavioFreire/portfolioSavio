import { Link } from "react-router-dom"
import { AsideS } from "./styleAside"

import fotoMinha from '/savioFAside.png'

const Aside = () => {

    return (
        <AsideS>
            <aside>
                <div className="foto">
                    <img src={fotoMinha} alt="Minhafoto" />
                </div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#about">Sobre Mim</a></li>
                        <li><a href="#port">Portfólio</a></li>
                        <li><a href="#ex">Experiências</a></li>
                        <li><a href="#contact">Contato</a></li>
                    </ul>
                    <div className="linha" />
                </nav>
            </aside>
        </AsideS>
    )
}

export default Aside