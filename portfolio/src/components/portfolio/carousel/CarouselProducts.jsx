import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import EachProject from './eachProject/EachProject'

import "./styles.css";

import pokedexImg from '/pokedex.png'
import movieImg from '/movie.png'
import store from '/store.png'

import { Pagination, Autoplay, Navigation } from "swiper";
import { useState,useEffect } from "react";

export default function CarouselProducts() {

    const [maxWidth, setMaxWidth] = useState(2)

    var width = window.screen.width;

    useEffect(()=>{
        if(width > 800){
            setMaxWidth(2)
        }
        else{
            setMaxWidth(1)
        }    
    },[])
    
    
    return (
        <>
            <Swiper
                slidesPerView={maxWidth}
                spaceBetween={3}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                  }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <EachProject name='Pokedex' image={pokedexImg} description='WebSite de Pokemon que consome uma API e mostra todos os pokemons existentes, inclusive possibilita criar o seu próprio time com seus pokemons favoritos.' link='https://pokedex-f2fbd.web.app/' tec='ReactJs | Context Api | Styled Components | Java Script | Fetch | React Routes | Vite | React Icons | Firebase '/>
                </SwiperSlide>
                <SwiperSlide>
                    <EachProject name='Filmes e séries' image={movieImg} description='WebSite de filmes e séries que, através de um API, exibe os filmes e séries com as melhores notas.' link='https://moviesandtvseries-78215.web.app/' tec='ReactJs | useParams | Context Api | Styled Components | Java Script | Fetch | React Routes | Vite | React Icons | Firebase '/>
                </SwiperSlide>
                <SwiperSlide>
                <EachProject name='Loja' image={store} description='Loja simples com poucas funcionalidades, mas que possui um carrinho e alguns produtos vindos de uma API.' link='https://projeto-teste-78cde.web.app/' tec='ReactJs | Context Api | Styled Components | Java Script | Fetch | Vite | React Icons | Firebase '/>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
