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
                        <li>Home</li>
                        <li>Sobre Mim</li>
                        <li>Portfólio</li>
                        <li>Experiências</li>
                        <li>Contato</li>
                    </ul>
                    <div className="linha" />
                </nav>
            </aside>
        </AsideS>
    )
}

export default Aside