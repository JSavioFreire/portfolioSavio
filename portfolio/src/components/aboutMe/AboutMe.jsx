import { AboutMeS } from "./styleAboutMe"

import { DiReact } from 'react-icons/di';
import { SiStyledcomponents } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt } from 'react-icons/fa';
import { FaBootstrap } from 'react-icons/fa';
import { SiVite } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiRedux } from 'react-icons/si';
import { FaNode } from 'react-icons/fa';
import { DiSass } from 'react-icons/di';
import { FaPython } from 'react-icons/fa';
import { SiJquery } from 'react-icons/si';


const AboutMe = () => {
    return (
        <AboutMeS>
            <div className="title" id='about'><h1 className="NameTitle">SOBRE MIM</h1></div>
            <div className="textAboutMe">
                <h1>
                    Eu sou <strong>Sávio Freire</strong>, Desenvolvedor Front-End
                </h1>
                <p>
                    Meu nome é Sávio Freire, tenho 24 anos, sou casado e sou um amante de tecnologia. Gosto muito de me desafiar, e como um nerdola nato, sempre gostei de quebra-cabeças e jogo difíceis, acredito que seja por isso que me apaixonei pela programação; Como em um game por exemplo, são nas áreas mais complicadas e desafiadoras que encontramos as maiores recompensas, e pra mim, nada é mais recompensador do que ver o meu site bonitão, meu código lindo e tudo funcionando corretamente.
                </p>
            </div>
            <div className="flex">
                <div className="iDo" data-aos="fade-right">
                    <div>
                        <h1>Tecnologias que utilizo:</h1>
                        <div className="tec" id="lineBottom">
                            <DiReact />
                            <SiVite />
                            <SiStyledcomponents />
                            <IoLogoJavascript />
                            <AiFillHtml5 />
                            <FaCss3Alt />
                            <FaBootstrap />
                            <SiJquery />
                        </div>
                        <h1>Tecnologias que tenho interesse:</h1>
                        <div className="tec">
                            <SiTypescript />
                            <SiRedux />
                            <FaPython />
                            <FaNode />
                            <DiSass />
                        </div>
                    </div>
                </div>
                <div className="iNow">
                    <h1>
                        O que eu sei?
                    </h1>
                    <p>
                        Desenvolvo aplicações com React Js utilizando Vite, hooks, Context API e React Router. Gostou muito de utilizar o Styled Components nos meus projetos, gostou muito da forma como ele resolve alguns problemas que eu tinha no CSS quando a minha criatividade de nome de classes acabava 😉.
                    </p>
                    <h1>
                        O que eu quero aprender?
                    </h1>
                    <p>
                        Acredito que as minhas melhores qualidades são a curiosidade e o foco, e quando junto as duas para fazer algo que eu gosto, tudo fica mais fácil. E eu tenho muita curiosidade em me aprofundar em TypeScript para evoluir como Front-end. Mas minha curiosidade não está presa apenas para aprender Front-end, também tenho muita vontade de aprender alguma liguagem do Back-end como Python.
                    </p>
                </div>
            </div>
        </AboutMeS>
    )
}

export default AboutMe