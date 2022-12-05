import { ContactS } from "./styleContact"

import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <ContactS>
      <div className="title" id="contact"><h1 className="NameTitle">FALE COMIGO</h1></div>
      <h2>Qualquer dúvida, sinta-se a vontade para entrar em contato.</h2>
      <section>
          <div className="links">
            <AiFillGithub />
            <a href="https://github.com/JSavioFreire" target='_blank'>github.com</a>
          </div>
          <div className="links">
            <AiFillLinkedin />
            <a href="https://www.linkedin.com/in/s%C3%A1vio-freire-263198244/" target='_blank'>linkedin.com</a>
          </div>
          <div className="links">
            <FaWhatsappSquare />
            <a href="https://api.whatsapp.com/send?phone=5521968212882" target='_blank'>(21) 96821-2882</a>
          </div>
          <div className="links">
            <FaInstagramSquare />
            <a href="https://www.instagram.com/freiresavio7/" target='_blank'>instagram.com</a>
          </div>
          <div className="links">
            <MdEmail />
            <a href="mailto:freiresavio7@gmail.com" target='_blank'>freiresavio7@gmail.com</a>
          </div>
        <div>
          <h2>Muito obrigado pela visita, espero que tenha gostado.</h2>
        </div>
      </section>
    </ContactS>
  )
}

export default Contact