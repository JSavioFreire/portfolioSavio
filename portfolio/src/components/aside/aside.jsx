import { AsideS } from "./styleAside"

import fotoMinha from '/savioF.png'


const Aside = () => {
    return (
        <AsideS>
            <aside>
                <div className="foto">
                    <img src={fotoMinha} alt="Minhafoto" />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sobre Mim</li>
                        <li>Experiências</li>
                        <li>Portfólio</li>
                        <li>Contato</li>
                    </ul>
                    <div className="linha" />
                </nav>
            </aside>
        </AsideS>
    )
}

export default Aside