import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

import pokedexImg from '../../../imageCarousel/pokedex.png'
import movieImg from '../../../imageCarousel/movie.png'

import { Pagination } from "swiper";

export default function CarouselPro() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pokedexImg} /></SwiperSlide>
        <SwiperSlide><img src={movieImg} /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}
